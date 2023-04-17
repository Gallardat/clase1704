import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  nombre: string=""
  edad: number=0;
  cursos: string[]=['Angular', 'HTML', 'CSS'];
  n1: number=0
  n2:number=0
  operacion: string ="elija"
  resultado: number=0


constructor(){}
ngOnInit() {
}
  setColor() {
    return this.edad >= 5 ? 'blue' : 'red';
    }

}
