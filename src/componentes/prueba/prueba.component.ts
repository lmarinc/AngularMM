import { Component, HostListener } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-prueba',
  standalone: true,
  templateUrl: './prueba.component.html',
  imports: [MatCardModule, MatButtonModule]
})
export class PruebaComponent {
  private startX: number | null = null;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.clientX; // Guardar la posición inicial del mouse
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (this.startX !== null) {
      const endX = event.clientX; // Obtener la posición final del mouse
      const deltaX = endX - this.startX; // Calcular la diferencia

      if (deltaX > 50) {
        this.onSwipeRight(); // Si se desliza a la derecha
      } else if (deltaX < -50) {
        this.onSwipeLeft(); // Si se desliza a la izquierda
      }
      this.startX = null; // Reiniciar la posición inicial
    }
  }

  onSwipeLeft() {
    console.log('Deslizado a la izquierda');
    alert('Deslizado a la izquierda');
  }

  onSwipeRight() {
    console.log('Deslizado a la derecha');
    alert('Deslizado a la derecha');
  }

  onButtonClick() {
    console.log('Botón de acción presionado');
    alert('Botón de acción presionado');
  }
}
