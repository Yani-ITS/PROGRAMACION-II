import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NuestraEmpresaComponent } from './nuestra-empresa/nuestra-empresa.component';
import { NuestraEquipoComponent } from './nuestra-equipo/nuestra-equipo.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    HomeComponent,
    NuestraEmpresaComponent,
    NuestraEquipoComponent,
    ProductosComponent,
    ServiciosComponent,
    GaleriaComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
