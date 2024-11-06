import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {ListaComponent} from '../lista/lista.component';

@Component({
  selector: 'app-animacion',
  standalone: true,
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css'],
  imports: [
    MatButton,
    NgIf,
    ListaComponent
  ],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.5)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('void <=> *', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class AnimacionComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
