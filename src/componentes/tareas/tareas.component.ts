import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';  // Importa el módulo de iconos
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, DragDropModule, FormsModule, MatIconModule
  ]
})
export class TareasComponent {
  tareasPendientes: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  tareasEnProgreso: string[] = [];
  tareasCompletadas: string[] = [];
  nuevaTarea: string = '';
  isDragging: boolean = false;

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareasPendientes.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }

  startDragging() {
    this.isDragging = true;
  }

  stopDragging() {
    this.isDragging = false;
  }

  eliminarTarea(event: CdkDragDrop<string[]>) {
    event.previousContainer.data.splice(event.previousIndex, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.stopDragging();

    if (event.container.id === 'eliminar') {
      this.eliminarTarea(event);
    } else if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
