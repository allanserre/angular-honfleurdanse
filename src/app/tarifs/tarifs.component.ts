import { Component, OnInit } from '@angular/core';
import TarifsJson from '../../assets/tarifs.json';

interface Eleve {
  cours1: number,
  cours2: number,
  cours3: number,
  tresor: number,
}
interface Tarifs {
  periode: string,
  description: string,
  eleves: Eleve[]
}

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {

  tarifs: Tarifs = TarifsJson;

  constructor() { }

  ngOnInit(): void {
  }

}
