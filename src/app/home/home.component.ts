import { Component, OnInit } from '@angular/core';
import AccueilJSON from '../../assets/translations/fr/presentation-acceuil.json';

interface ACCEUIL {
  presentation: string[]
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  acceuil: ACCEUIL = AccueilJSON;
  presentation = this.acceuil.presentation.join();
  constructor() { }

  ngOnInit(): void {

  }

}
