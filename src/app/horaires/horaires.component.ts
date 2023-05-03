import { Component, OnInit } from '@angular/core';
import CoursJson from '../../assets/horaires.json';

interface COURS {
  age: string;
  libelle: string;
  lundi: string[];
  mercredi: string[];
  jeudi: string[];
  vendredi: string[];
}

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.scss']
})
export class HorairesComponent implements OnInit {

  cours : COURS[] = CoursJson;
  constructor() { }

  ngOnInit(): void {
  }

}
