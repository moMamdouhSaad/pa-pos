import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Client } from '@pa-pos/api-interfaces';
import { PagerService } from '@pa-pos/shared/data-access';
import { ModalRef } from '@pa-pos/ui';
import { environment } from 'apps/pos/src/environments/environment';

@Component({
  selector: 'pa-pos-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent implements OnInit {
  public constructor(
    private readonly modalRef: ModalRef,
    private readonly fb: FormBuilder,
    public readonly pagerService: PagerService,
    private readonly _sanitizer: DomSanitizer
  ) {}
  public formGroup: FormGroup;
  public client: Client = this.modalRef.data.client;
  public imgUrl: SafeUrl = './assets/img-placeholder.jpg';
  public imgLoading = false;
  public modalTitle: string;
  public modalSubmitBtn: string;

  public ngOnInit(): void {
    this.initClientForm();
  }

  private initClientForm(): void {
    let mode: string;
    if ('_id' in this.client) {
      mode = 'edit';
      this.modalTitle = 'Edit client';
      this.modalSubmitBtn = 'Update client';
      if (this.client.image) {
        this.imgUrl = `${environment.api}/img/${this.client.image}`;
      }
    } else {
      mode = 'add';
      this.modalTitle = 'Add client';
      this.modalSubmitBtn = 'Add new client';
    }
    const { _id, name, address, image, notes, phone } = this.client;

    this.formGroup = this.fb.group({
      _id,
      name: [name, Validators.required],
      address: [address],
      image: [null],
      notes: [notes],
      phone: [phone],
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
    formData.append('address', this.formGroup.get('address').value);
    formData.append('notes', this.formGroup.get('notes').value);
    formData.append('phone', this.formGroup.get('phone').value);

    this.modalRef.close({
      successfully: true,
      client: formData,
      clientId: this.client._id,
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
