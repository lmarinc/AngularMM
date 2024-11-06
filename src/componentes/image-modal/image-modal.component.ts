import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  template: `
    <h1 mat-dialog-title>{{ data.image.description }}</h1>
    <div mat-dialog-content>
      <img [src]="data.image.src" alt="Image in modal" class="full-image"/>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClose()">Cerrar</button>
    </div>
  `,
  styles: [`
    .full-image {
      width: 100%;
      height: auto;
    }
  `],
  standalone: true
})
export class ImageModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
