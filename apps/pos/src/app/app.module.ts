import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreUiModule } from '@pa-pos/core/ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, HttpClientModule, CoreUiModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
