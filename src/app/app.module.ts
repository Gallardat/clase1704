import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundametotTsComponent } from './fundametot-ts/fundametot-ts.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormularioPadreComponent } from './formulario-padre/formulario-padre.component';
import { FormularioHijoComponent } from './formulario-hijo/formulario-hijo.component';
import { Formulario2PadreComponent } from './formulario2-padre/formulario2-padre.component';
import { Formulario2HijoComponent } from './formulario2-hijo/formulario2-hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    FundametotTsComponent,
    DirectivasComponent,
    FormularioPadreComponent,
    FormularioHijoComponent,
    Formulario2PadreComponent,
    Formulario2HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
