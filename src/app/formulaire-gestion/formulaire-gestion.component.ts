import { Component, Input, OnInit, Output ,Inject} from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service';

@Component({
  selector: 'app-formulaire-gestion',
  templateUrl: './formulaire-gestion.component.html',
  styleUrls: ['./formulaire-gestion.component.css']
})
export class FormulaireGestionComponent implements OnInit {

  nomHotel: string;
  adresse: string;
  nbrChambre: number;
  dateDepart: Date;
  dateRetour: Date;
  prix: number;
  rabais: number;
  caracteristiques: string;
  tableauCarac: string[] =[];

  
  
 
  minDateDepart: Date= new Date;
  minDateRetour: Date= new Date;

  destinationControl:FormControl = new FormControl();
  departControl:FormControl = new FormControl();
  
 
  destinations: string[] = ['Cuba', "Islande", 'Jamaïque', 'Mexique', 'Paris', 'Thaïlande'  ]
  villes: string[] = ['Montréal', 'Québec', 'Toronto']

  
  filteredDestinations: Observable<string[]>;
  filteredVilles: Observable<string[]>;
  
  
 
  onAnnulerClick(): void {
    this.dialogRef.close();
  }

  changeCaracteristiques(e, valeur) {
    console.log('valeur:' + valeur + 'état: ' + e)
    if(e){
      this.tableauCarac.push(valeur);
    }
    else if(!e){
      const index: number =  this.tableauCarac.indexOf(valeur);
      if (index !== -1) {
        this.tableauCarac.splice(index, 1);
      }   
    }
    console.log(this.tableauCarac)
    return this.newForfait.hotel.caracteristiques = this.tableauCarac;
    
  }
  
  constructor(
    public dialogRef: MatDialogRef<FormulaireGestionComponent>, 
   
    @Inject(MAT_DIALOG_DATA) public newForfait: Forfait) {
      
     }
    
     
  
   
  ngOnInit() {
    
 
    this.filteredDestinations = this.destinationControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  
    this.filteredVilles = this.departControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter2(value))
     
    );
   
  }
  
 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.destinations.filter(option => option.toLowerCase().includes(filterValue));
  }
 
  private _filter2(value: string): string[] {
    const filterValue2 = value.toLowerCase();

    return this.villes.filter(
      ville => ville.toLowerCase().indexOf(filterValue2) === 0
    );
  }
  
}
