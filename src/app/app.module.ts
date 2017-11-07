import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {TechDetailComponent} from './components/tech-detail.component';
import {TechService} from './services/tech.service';
import {TechnologiesComponent} from './components/technologies.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent, TechnologiesComponent , TechDetailComponent, MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TechService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/**
 *
 * Aspectos importante:
 *
 * Se usa typescript en favor de javascript
 *
 * VUELVE EL DOBLE BINDEO (yay!)
 *
 * Cada componente puede definir en el atributo "selector" la etiquete html con la cual se representa a la vista correspondiente (chet)
 *
 * CallbackHellProblem:  HTTP retorna "Observables",  paradigma reactivo, en favor al uso de callbacks y promises
 * para lograr esto se utiliza la libreria RXJS ( reactive javascript)
 *
 * Se favorece fuertemente la "composicion", cada componente con su vista, con su estilo con su servicio
 *
 * Se incentiva aluso del metodo "on init" para la carga de datos iniciales, ej, ir al server
 *
 *
 *
 *
 */
