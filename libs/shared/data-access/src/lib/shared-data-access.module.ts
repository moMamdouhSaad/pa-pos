import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  providers: [
    {
      provide: MatSnackBarRef,
      useValue: {},
    },
  ],
})
export class SharedDataAccessModule {}
