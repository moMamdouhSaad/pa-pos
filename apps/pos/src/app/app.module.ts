import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreUiModule } from '@pa-pos/core/ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    HttpClientModule,
    AppRoutingModule,
    CoreUiModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
