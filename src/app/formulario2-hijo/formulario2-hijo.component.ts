import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario2-hijo',
  templateUrl: './formulario2-hijo.component.html',
  styleUrls: ['./formulario2-hijo.component.css']
})
export class Formulario2HijoComponent {
  nombre: string=""
  apellido: string=""
  dni: string =""
  telefono: string=""
  direccion: string=""
  email: string=""


  @Output()  datosPaciente = new EventEmitter<any>();

   addPaciente()
   {
    let p: any ={
      nombre:this.nombre,
      apellido: this.apellido,
      dni:this.dni,
      telefono: this.telefono,
      direccion:this.direccion
    }
    this.datosPaciente.emit(p)
   }

}
