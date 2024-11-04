import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from '../componentes/prueba/prueba.component';
import { ListaComponent } from '../componentes/lista/lista.component';
import { AnimacionComponent } from '../componentes/animacion/animacion.component';
import { NotasComponent } from '../componentes/notas/notas.component';
import { GaleriaComponent } from '../componentes/galeria/galeria.component';
import { TareasComponent } from '../componentes/tareas/tareas.component';
import { ImageModalComponent } from '../componentes/image-modal/image-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PruebaComponent,
    ListaComponent,
    AnimacionComponent,
    NotasComponent,
    GaleriaComponent,
    TareasComponent,
    ImageModalComponent // Asegúrate de incluir otros componentes necesarios aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Asegúrate de que esta línea esté correcta
})
export class AppComponent {
  title = 'AngularMM';
}
