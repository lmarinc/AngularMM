import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';  // Importar MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Importar MatInputModule
import { MatButtonModule } from '@angular/material/button';  // Importar MatButtonModule
import { MatPaginatorModule } from '@angular/material/paginator'; // Importar MatPaginatorModule
import { MatTableModule } from '@angular/material/table'; // Importar MatTableModule
import { NgIf } from '@angular/common'; // Importar MatTableModule

@Component({
  selector: 'app-contactos',
  standalone: true,
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    NgIf
  ]
})
export class ContactosComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  contactos: any[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['nombre', 'email', 'telefono', 'acciones'];
  contactoEliminado: any;
  editando: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('confirmacionDialog') confirmacionDialog!: TemplateRef<any>;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{9}')]]
    });
  }

  ngOnInit(): void {
    this.cargarContactos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarContactos() {
    // Cargar datos de ejemplo
    this.contactos = [
      { nombre: 'Luis Marin', email: 'luis@gmail.com', telefono: '666666667' },
      { nombre: 'Rafa Diez', email: 'rafa@gmail.com', telefono: '635551552' },
      { nombre: 'Ana López', email: 'ana.lopez@gmail.com', telefono: '612345678' },
      { nombre: 'Carlos Pérez', email: 'carlos.perez@gmail.com', telefono: '623456789' },
      { nombre: 'María García', email: 'maria.garcia@gmail.com', telefono: '634567890' },
      { nombre: 'Juan Martínez', email: 'juan.martinez@gmail.com', telefono: '645678901' },
      { nombre: 'Laura Sánchez', email: 'laura.sanchez@gmail.com', telefono: '656789012' },
      { nombre: 'Pedro Fernández', email: 'pedro.fernandez@gmail.com', telefono: '667890123' },
      { nombre: 'Lucía Gómez', email: 'lucia.gomez@gmail.com', telefono: '678901234' },
      { nombre: 'Miguel Torres', email: 'miguel.torres@gmail.com', telefono: '689012345' },
      { nombre: 'Elena Ruiz', email: 'elena.ruiz@gmail.com', telefono: '690123456' },
      { nombre: 'Javier Díaz', email: 'javier.diaz@gmail.com', telefono: '601234567' },
    ];
    this.dataSource.data = this.contactos;
  }

  agregarOEditarContacto() {
    if (this.form.valid) {
      const contacto = this.form.value;

      if (this.editando) {
        const index = this.contactos.findIndex(c => c === this.contactoEliminado);
        this.contactos[index] = contacto;
      } else {
        this.contactos.push(contacto);
      }

      this.form.reset();
      this.editando = false;
      this.dataSource.data = this.contactos;
    }
  }

  editarContacto(contacto: any) {
    this.form.setValue({
      nombre: contacto.nombre,
      email: contacto.email,
      telefono: contacto.telefono
    });
    this.contactoEliminado = contacto;
    this.editando = true;
  }

  eliminarContacto(contacto: any) {
    this.contactoEliminado = contacto;
    this.dialog.open(this.confirmacionDialog); // Usamos el template referenciado
  }

  confirmar() {
    const index = this.contactos.findIndex(c => c === this.contactoEliminado);
    if (index !== -1) {
      this.contactos.splice(index, 1);
      this.dataSource.data = this.contactos;
    }
    this.dialog.closeAll();
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  cancelarEdicion() {
    this.form.reset();
    this.editando = false;
  }
}
