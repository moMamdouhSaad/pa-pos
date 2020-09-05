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
} from '@pa-pos/ui';

@NgModule({
  declarations: [AppComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
