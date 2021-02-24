import { Component, OnInit } from '@angular/core';

import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-costa-rica',
  templateUrl: './costa-rica.component.html',
  styleUrls: ['./costa-rica.component.css']
})
export class CostaRicaComponent implements OnInit {
  listForfaits: Array<Forfait> ;
  
  contains(destination, resultat) {
    if (destination.includes(resultat))
    {
      return true;
    }
  }
  
  constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    this.getForfait();
  }
  getForfait(): void {
    this.voyagesService.getForfait()
        .subscribe(resultat => {
          this.listForfaits = resultat
        });
}
}