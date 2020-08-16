import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule, AlertModule } from '@pa-pos/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ButtonModule, AlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
