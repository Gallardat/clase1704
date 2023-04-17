import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent {

  @Input() recibirDePadre: any=[]

}
