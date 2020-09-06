import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  ButtonModule,
  AlertModule,
  BadgeModule,
  BreadcrumbModule,
  CardModule,
  CollabseModule,
  DropdownModule,
  FormModule,
  JumbotronModule,
  ListGroupModule,
  MediaObjectModule,
  ProgressModule,
  ModalModule,
  NavModule,
  NavbarModule,
} from '@pa-pos/ui';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    AlertModule,
    BadgeModule,
    BreadcrumbModule,
    CardModule,
    CollabseModule,
    DropdownModule,
    FormModule,
    JumbotronModule,
    ListGroupModule,
    MediaObjectModule,
    ProgressModule,
    ModalModule,
    NavModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
