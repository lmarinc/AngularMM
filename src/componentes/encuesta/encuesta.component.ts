import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ],
})
export class EncuestaComponent {
  preguntas = [
    { id: 'p1', texto: '¿Cuál es tu color favorito?', opciones: ['Rojo', 'Azul', 'Verde', 'Amarillo'] },
    { id: 'p2', texto: '¿Cuál es tu animal favorito?', opciones: ['Perro', 'Gato', 'Ave', 'Pez'] },
    { id: 'p3', texto: '¿Cuál es tu estación favorita?', opciones: ['Primavera', 'Verano', 'Otoño', 'Invierno'] },
  ];

  respuestas: { [key: string]: string } = {};
  mostrarResumen = false;

  seleccionarRespuesta(preguntaId: string, respuesta: string) {
    this.respuestas[preguntaId] = respuesta;
  }

  mostrarRespuestas() {
    this.mostrarResumen = true;
  }

  reiniciarEncuesta() {
    this.respuestas = {};
    this.mostrarResumen = false;
  }
}

