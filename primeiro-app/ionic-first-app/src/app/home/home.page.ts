import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonFooter, IonCol, IonRow, IonGrid, IonRouterLink } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonRouterLink,RouterLink, IonGrid, IonRow, IonCol, IonFooter, IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  rota = '/cadastrar'
  constructor() {}

  opa(){
    console.log('clicou');
    
  }
}
