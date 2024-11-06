import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-calculadora-compras',
  standalone: true,
  templateUrl: './calculadora-compras.component.html',
  styleUrls: ['./calculadora-compras.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class CalculadoraComprasComponent {
  compraForm: FormGroup;
  productos: Producto[] = [];
  total = 0;

  constructor(private fb: FormBuilder) {
    this.compraForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0.01)]],
      cantidad: [1, [Validators.required, Validators.min(1)]]
    });
  }

  agregarProducto() {
    if (this.compraForm.valid) {
      const producto: Producto = this.compraForm.value;
      this.productos.push(producto);
      this.actualizarTotal();
      this.compraForm.reset({ precio: 0, cantidad: 1 });
    }
  }

  actualizarTotal() {
    this.total = this.productos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  }

  reiniciarFormulario() {
    this.compraForm.reset({ precio: 0, cantidad: 1 });
    this.productos = [];
    this.total = 0;
  }
}
