import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router'; 
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],

  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonAccordion, IonAccordionGroup, IonItem, IonLabel]
})
export class SobrePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
