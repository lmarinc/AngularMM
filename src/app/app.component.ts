import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PruebaComponent} from '../componentes/prueba/prueba.component';
import {ListaComponent} from '../componentes/lista/lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PruebaComponent, ListaComponent, BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMM';
}
