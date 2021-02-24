import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { forfaits } from '../mock-forfaits';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  active: string;
  title = 'app-voyages';
  mesForfaits: Array<Forfait> = forfaits;
  constructor() { }

  ngOnInit(): void {
    console.log('Mes forfaits',this.mesForfaits);
  }

}
