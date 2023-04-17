import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-padre',
  templateUrl: './formulario-padre.component.html',
  styleUrls: ['./formulario-padre.component.css']
})
export class FormularioPadreComponent {


  nombre: string=""
  apellido: string=""
  dni: string=""
  doctores: any=[]

  agregarPaciente(){
    let datos: any={
    nombre:this.nombre,
    apellido:this.apellido,
    dni:this.dni
    }
    this.doctores.push(datos)
  }



}
