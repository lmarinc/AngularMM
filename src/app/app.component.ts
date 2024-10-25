import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PruebaComponent} from '../componentes/prueba/prueba.component';
import {ListaComponent} from '../componentes/lista/lista.component';
import {AnimacionComponent} from '../componentes/animacion/animacion.component';
import {NotasComponent} from '../componentes/notas/notas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebaComponent, ListaComponent, AnimacionComponent, NotasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMM';
}
