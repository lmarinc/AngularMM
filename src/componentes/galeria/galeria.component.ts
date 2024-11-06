import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    CommonModule, // Asegúrate de importar CommonModule
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  images = [
    { src: 'assets/gallery/img.png', description: 'Imagen prueba' },
  ];
  filteredImages = this.images;
  searchText = '';

  defaultImageUrl = 'assets/gallery/img.png'; // URL de la imagen que se duplicará
  newImageDescription = 'Imagen prueba'; // Descripción de la imagen a duplicar

  constructor(public dialog: MatDialog) {}

  openDialog(image: any): void {
    this.dialog.open(ImageModalComponent, {
      data: { image },
    });
  }

  filterImages(): void {
    this.filteredImages = this.images.filter(image =>
      image.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addImage(): void {
    const newImage = {
      src: this.defaultImageUrl, // Usa la URL por defecto
      description: this.newImageDescription, // Usa la descripción por defecto
    };
    this.images.push(newImage);
    this.filteredImages = [...this.images]; // Actualiza las imágenes filtradas
    this.filterImages(); // Aplica el filtro si es necesario
  }
}
