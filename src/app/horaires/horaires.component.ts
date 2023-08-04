import { Component, OnInit } from '@angular/core';
import HorairesJson from '../../assets/translations/fr/horaires.json';

interface Horaires {
  professeur: string[];
  lieu: string[];
  cours: {
    lundi: Cour[]
    mercredi: Cour[];
    jeudi: Cour[];
    vendredi: Cour[];
  }

}

interface Cour {
  "debut": string,
  "fin": string,
  "age": string,
  "prof": number,
  "lieu": number
}

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.scss']
})
export class HorairesComponent implements OnInit {

  horaires: Horaires = HorairesJson;
  constructor() { }

  ngOnInit(): void {
  }

}
