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
import { PagerService } from '@pa-pos/shared/data-access';
import { ModalRef } from '@pa-pos/ui';
import { environment } from 'apps/pos/src/environments/environment';

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
  public modalTitle: string;
  public modalSubmitBtn: string;

  public constructor(
    private readonly modalRef: ModalRef,
    private readonly fb: FormBuilder,
    private readonly _sanitizer: DomSanitizer
  ) {}

  public ngOnInit(): void {
    this.initCategoryForm();
  }

  private initCategoryForm(): void {
    let mode: string;
    if ('_id' in this.category) {
      mode = 'edit';
      this.modalTitle = 'Edit category';
      this.modalSubmitBtn = 'Update category';
      if (this.category.image) {
        this.imgUrl = `${environment.api}/img/${this.category.image}`;
      }
    } else {
      mode = 'add';
      this.modalTitle = 'Add category';
      this.modalSubmitBtn = 'Add new category';
    }
    const { _id, name, description, image } = this.category;

    this.formGroup = this.fb.group({
      _id,
      name: [name, Validators.required],
      description: [description],
      image: [null],
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

    this.modalRef.close({
      successfully: true,
      category: formData,
      catId: this.category._id,
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
