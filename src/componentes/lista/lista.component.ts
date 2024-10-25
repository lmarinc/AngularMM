import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { MatList, MatListItem } from '@angular/material/list';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  imports: [MatCardModule, MatButtonModule, MatInputModule, FormsModule, MatList, MatListItem, NgForOf, NgIf],
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
export class ListaComponent implements OnInit {
  newItem: string = '';
  items: string[] = [];
  isExpanded = false;

  constructor() { }

  ngOnInit() {
    this.loadItemsFromLocalStorage(); // Cargar elementos de localStorage al iniciar
  }

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem); // Añadir nuevo ítem a la lista
      this.saveItemsToLocalStorage(); // Guardar lista actualizada en localStorage
      this.newItem = ''; // Limpiar el input
    }
  }

  saveItemsToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
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

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.saveItemsToLocalStorage();
  }
}
