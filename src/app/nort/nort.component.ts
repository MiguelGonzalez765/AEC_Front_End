import { Component, OnInit, ViewChild } from '@angular/core';

import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Forfait } from '../forfait'; //inter
import { VoyagesService } from '../voyages.service';

import { Hotel } from '../hotel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm, FormControl, Validators } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import { Chart} from 'chart.js';
import{ MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import  'rxjs/add/operator/map';
@Component({
  selector: 'app-nort',
  templateUrl: './nort.component.html',
  styleUrls: ['./nort.component.css']
})

export class NortComponent implements OnInit {
  tableForfaits: Forfait[];
  selectedForfait: Forfait;
  columnsToDisplay = ['destination', 'villeDepart', 'prix', 'nomHotel', 'infoHotel', 'nbEtoiles', 'nbChambres', 'caract', 'dateDepart', 'dateRetour', 'rabais', 'vedette', 'actions'];
  ControlDes = new FormControl();
  ControlDep = new FormControl();
  newForfait: Forfait;
  options: string[] = ['Mexique', 'Texas', 'Cuba', 'Colombie', 'New York', 'Argentine', 'Costa Rica'];
  villeDeparts: string[] = ['Québec', 'Montréal', 'Rimouski', 'Lévis', 'Laval', 'Saint Paul', 'Sherbrooke'];
  ctrl = new FormControl(null, Validators.required);
  

  constructor(config: NgbRatingConfig, private voyageService: VoyagesService) {
    
  }
  ngOnInit(): void {
          this.newForfait = {_id: null, da: '1996457',  dateDepart:'', dateRetour: '', hotel:{nom:'',image:'', caracteristiques:[], coordonnees:'', nombreChambres:0, nombreEtoiles:0}, prix:0, destination:'', villeDepart:'', rabais:0, vedette:false}
           this.getForfait();
  }

  getForfait(): void {
    this.voyageService.getForfait()
      .subscribe(resultat => this.tableForfaits = resultat);
  }

  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }

  onEdit(forfaitFormEdition: NgForm): void {
    console.log('rdit');
    if (forfaitFormEdition.valid) {
      this.voyageService.updateForfait(this.selectedForfait)
        .subscribe(() => this.selectedForfait = null);
    }
  }

  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
      // @ts-ignore
      this.voyageService.addForfait(this.newForfait)
      .subscribe(forfait  => { this.tableForfaits.push(forfait);forfaitFormAjout.resetForm(); tableForfaits.renderRows();});
    }
  }
  

  


  onDelete(forfait: Forfait): void {
    this.voyageService.deleteForfait(forfait._id)
      // @ts-ignore
      .subscribe(result => this.tableForfaits = this.tableForfaits.filter(f => f !== forfait));
  }
}
