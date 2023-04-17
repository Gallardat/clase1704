import { publishFacade } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fundametot-ts',
  templateUrl: './fundametot-ts.component.html',
  styleUrls: ['./fundametot-ts.component.css']
})
export class FundametotTsComponent {

  //Union de tipo
  dato: number= 1|2|3
  dato1: "daniela"|"maria"="daniela"


constructor(){}
ngOnInit(): void {

  // definimos un array de tipo string
 let empleados: string []=[
    "Maria Perez",
    "Juanito Garcia",
    "Pepa Sosa"
  ]
let puestos: string []=[
  "Desarrollador",
  "Analista",
  "Consultor"
]
  //definimos un array de tipo númerico
  let numeros: number[]=[1,2,3,4,5]

  //Devuelve un string separada por el parámetro que le pasemos.
  console.log(empleados.join(','))

  //Devuelve la posición (el index, un número) en el array del valor del array que le pasamos por parámetro.
  console.log(empleados.indexOf('Maria Perez'))

  //Devuelve el mismo array añadiéndole el otro array que le hayamos pasado por parámetro.
  console.log(empleados.concat(puestos))

  //Añade un nuevo valor al final del array y devuelve el length del nuevo array generado.
   console.log(puestos.push('Diseñador'))

  //Es un destructive method que borra el último valor del array.Devuelve un string con el elemento del array recién borrado.
  console.log(empleados.pop())

  //Para averiguar el número elementos de un array.
  console.log(puestos.length)

}



aceptarN(dato:number,)
{
  if(dato==1 || dato ==2 || dato==3)
    {
      alert("Dato aceptado")
    }
    else
    {
      alert("Intente de nuevo")
    }
    }

  aceptarS(dato1:string)
    {
    if(dato1=="daniela" || dato1=="maria")
    {
      alert("Es valido")
    }
    else
    {
      alert("No es valido")
    }
}


generar()
  {
    enum PuestoDetrabajo{
      Desarrollador=1,
      Analista,
      Consultor,
      Programador,
      Diseñador,
      Vendedor
    }
    const listaPuestos = document.createElement("ul");
    for (let p in PuestoDetrabajo) {
      if (isNaN(Number(p))) {
        const item = document.createElement("li");
        item.innerText = p;
        listaPuestos.appendChild(item);
      }
    }
    document.body.appendChild(listaPuestos);
  }
}
