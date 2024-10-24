import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PruebaComponent} from '../componentes/prueba/prueba.component';
import {ListaComponent} from '../componentes/lista/lista.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebaComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMM';
}
