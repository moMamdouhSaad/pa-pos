import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';

import {
  BoxModule,
  LevelModule,
  IconModule,
  TableModule,
  FormModule,
  ButtonModule,
  ModalModule,
  FormContainerModule,
  DropdownModule,
  FilterItemModule,
} from '@pa-pos/ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  declarations: [ClientsComponent, ClientFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientsComponent,
      },
    ]),
    FlexLayoutModule,
    BoxModule,
    LevelModule,
    IconModule,
    TableModule,
    FormModule,
    ButtonModule,
    ModalModule,
    FormContainerModule,
    DropdownModule,
    FilterItemModule,
  ],
})
export class ClientsModule {}
