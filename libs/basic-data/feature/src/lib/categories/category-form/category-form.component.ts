import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@pa-pos/api-interfaces';
import { CategoryService } from '@pa-pos/basic-data/data-access';
import { PagerService } from '@pa-pos/shared/data-access';
import { ModalRef } from '@pa-pos/ui';

@Component({
  selector: 'pa-pos-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFormComponent implements OnInit {
  public formGroup: FormGroup;
  public category: Category = this.modalRef.data.category;
  public imgUrl: SafeUrl = './assets/img-placeholder.jpg';
  public imgLoading = false;
  public constructor(
    private readonly modalRef: ModalRef,
    private readonly fb: FormBuilder,
    private readonly categoriesService: CategoryService,
    public readonly pagerService: PagerService,
    private readonly route: ActivatedRoute,
    private readonly _sanitizer: DomSanitizer
  ) {}

  public ngOnInit(): void {
    this.initCategoryForm();
  }

  private initCategoryForm(): void {
    const { _id, name, description, image } = this.category;

    this.formGroup = this.fb.group({
      _id,
      name: [name, Validators.required],
      description: [description],
      image: [image],
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
    formData.append('description', this.formGroup.get('description').value);
    this.categoriesService.addNewCategory(formData).subscribe((res) => {
      this.categoriesService.addCategoryState(res.data);
      this.close();
    });
    this.route.queryParams.subscribe((x) =>
      this.categoriesService.loadCategories(x.page || 1)
    );
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

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
          reader.result.toString()
        );
        console.log(this.imgUrl);
        this.imgLoading = false;
        console.log(this.imgLoading);
      };
    }
  }
  public close(): void {
    this.modalRef.close();
  }
}
