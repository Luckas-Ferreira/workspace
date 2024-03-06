import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonFooter, IonCol, IonRow, IonGrid, IonText } from '@ionic/angular/standalone';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  standalone: true,
  imports: [IonText, IonGrid, IonRow, IonCol, IonFooter, IonLabel, IonItem, IonAccordion, IonAccordionGroup, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class CadastroComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
