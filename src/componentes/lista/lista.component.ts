import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {FormsModule} from '@angular/forms';
import {MatList, MatListItem} from '@angular/material/list';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  imports: [MatCardModule, MatButtonModule, MatInputModule, FormsModule, MatList, MatListItem, NgForOf],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: 1
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ListaComponent {
  newItem: string = '';
  items: string[] = [];
  isExpanded = false;

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem);
      this.newItem = ''; // Limpiar el input
    }
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addItem();
    }
  }
}
