import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.scss',
})
export class DialogDeleteComponent {
  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>) {}

  public okButton() {
    this.dialogRef.close(true);
  }
  public cancelButon() {
    this.dialogRef.close(false);
  }
}
