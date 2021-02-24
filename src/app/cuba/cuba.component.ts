import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';



@Component({
  selector: 'app-cuba',
  templateUrl: './cuba.component.html',
  styleUrls: ['./cuba.component.css']
})
export class CubaComponent implements OnInit {

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