import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Category, Item } from '@pa-pos/api-interfaces';
import { CategoryService } from '@pa-pos/basic-data/data-access';
import { ModalRef } from '@pa-pos/ui';
import { environment } from 'apps/pos/src/environments/environment';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'pa-pos-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent implements OnInit {
  public constructor(
    private readonly modalRef: ModalRef,
    private readonly fb: FormBuilder,
    private readonly _sanitizer: DomSanitizer,
    public readonly categoryService: CategoryService
  ) {}
  public formGroup: FormGroup;
  public item: Item = this.modalRef.data.item;
  public imgUrl: SafeUrl = './assets/img-placeholder.jpg';
  public imgLoading = false;
  public modalTitle: string;
  public modalSubmitBtn: string;

  public categories$: Observable<Category[]>;
  public streets: string[] = [
    'Champs-Élysées',
    'Lombard Street',
    'Abbey Road',
    'Fifth Avenue',
  ];
  public filteredCategories: Observable<Category[]>;

  public filteredStreets: Observable<string[]>;
  public control = new FormControl();

  public ngOnInit(): void {
    this.categories$ = this.categoryService.categories$();
    this.initItemForm();
    this.formGroup
      .get('category_id')
      .valueChanges.subscribe((val) => this._filter(val));
  }
  private _filter(value: string): void {
    const filterValue = this._normalizeValue(value);
    const filters = {
      search: filterValue || 'undefined',
    };
    this.categoryService.loadCategories(filters);
  }

  private _normalizeValue(category: string): string {
    return category.toLowerCase().replace(/\s/g, '');
  }

  private initItemForm(): void {
    let mode: string;
    if ('_id' in this.item) {
      mode = 'edit';
      this.modalTitle = 'Edit item';
      this.modalSubmitBtn = 'Update item';
      if (this.item.image) {
        this.imgUrl = `${environment.api}/img/${this.item.image}`;
      }
    } else {
      mode = 'add';
      this.modalTitle = 'Add item';
      this.modalSubmitBtn = 'Add new item';
    }
    const { _id, name, description, image, barcode, category_id } = this.item;

    this.formGroup = this.fb.group({
      _id,
      name: [name, Validators.required],
      description: [description],
      image: [null],
      barcode: [barcode],
      category_id: [category_id, Validators.required],
    });
  }
  public onSubmit(): void {
    const formData = new FormData();
    if (this.formGroup.get('image').value) {
      formData.append(
        'image',
        this.formGroup.get('image').value,
        this.formGroup.get('image').value.name
      );
    }
    formData.append('name', this.formGroup.get('name').value);
    formData.append('barcode', this.formGroup.get('barcode').value);
    formData.append('description', this.formGroup.get('description').value);
    formData.append('category_id', this.formGroup.get('category_id').value);

    this.modalRef.close({
      successfully: true,
      item: formData,
      itemId: this.item._id,
    });
  }
  public onFileChanged(event): void {
    if (event.target.files.length === 0) {
      return;
    }
    const fileSize = event.target.files[0].size;
    if (fileSize > 200839) {
      return;
    }

    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.imgLoading = true;
      const file = event.target.files[0];
      this.formGroup.patchValue({ image: file });

      reader.onload = (e) => {
        this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
          reader.result.toString()
        );
        this.imgLoading = false;
      };
      reader.readAsDataURL(file);
    }
  }
  public close(): void {
    this.modalRef.close();
  }
}
