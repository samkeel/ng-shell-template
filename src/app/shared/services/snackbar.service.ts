import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  readonly defaultDuration = 5;
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string, durationSeconds?: number) {
    if (typeof durationSeconds !== 'undefined') {
      this.durationInSeconds = durationSeconds;
    } else {
      this.durationInSeconds = this.defaultDuration;
    }
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
