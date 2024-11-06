import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {MatCard, MatCardTitle} from '@angular/material/card';

interface Estudiante{
  nombre: string;
  nota: number;
}

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    NgForOf,
    MatCardTitle,
    MatCard
  ],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  estudiantes: Estudiante[] = [
    {nombre: 'Luis', nota: 10},
    {nombre: 'Rafa', nota: 9},
    {nombre: 'Nahuel', nota: 4},
    {nombre: 'Lucia', nota: 5},
  ];
  columnasMostradas: string[] = ['nombre', 'nota','estado'];
  nuevoNombreEstudiante: string = '';
  nuevaNotaEstudiante: number | null = null;
  filtroNombre: string = '';
  filtroEstado: string = '';

  agregarEstudiante(){
    if(this.nuevoNombreEstudiante && this.nuevaNotaEstudiante !== null){
      this.estudiantes.push({
        nombre: this.nuevoNombreEstudiante,
        nota: this.nuevaNotaEstudiante
      });
      this.nuevoNombreEstudiante = '';
      this.nuevaNotaEstudiante = null;
    }
  }
  obtenerEstado(nota: number): string{
    return nota >=5 ? 'Aprobado' : 'Suspenso';
  }

  get estudiantesFiltrados(): Estudiante[]{
    return this.estudiantes.filter(estudiante =>{
      const coincideNombre =this.filtroNombre ? estudiante.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) : true;
      const coincideEstado = this.filtroEstado ? this.obtenerEstado(estudiante.nota) === this.filtroEstado : true;
      return coincideNombre && coincideEstado;
    })
  }

}
