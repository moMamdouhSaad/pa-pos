import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  public constructor(private readonly snackBar: MatSnackBar) {}

  public openSnackBar(message: string, type: string, action?: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: type === 'success' ? ['blue-snackbar'] : ['err-snackbar'],
    });
  }
}
