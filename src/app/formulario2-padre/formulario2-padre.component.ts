import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario2-padre',
  templateUrl: './formulario2-padre.component.html',
  styleUrls: ['./formulario2-padre.component.css']
})
export class Formulario2PadreComponent {

  datoPaciente: any[]=[]

  addPaciente(p: any){
    this.datoPaciente.push(p)
  }

}
