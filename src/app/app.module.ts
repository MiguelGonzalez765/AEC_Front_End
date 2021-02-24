import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//Module pour le service
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

// import { ForfaitComponent } from './forfait/forfait.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
// services
import { VoyagesService } from './voyages.service';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { EtoileComponent } from './etoile/etoile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { NortComponent } from './nort/nort.component';
import { FormulaireGestionComponent} from './formulaire-gestion/formulaire-gestion.component';
import { CostaRicaComponent } from './costa-rica/costa-rica.component';
import { CubaComponent } from './cuba/cuba.component';
import { ChartDataCComponent } from './chart-data-c/chart-data-c.component';
import { ChartsModule } from 'ng2-charts';
import { ChartDataMComponent } from './chart-data-m/chart-data-m.component';




@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
     MiniForfaitComponent,
    ForfaitCompletComponent,
    FormulaireForfaitComponent,
    EtoileComponent,
    NavbarComponent,
    AccueilComponent,
    AproposComponent,
    NortComponent,
    FormulaireGestionComponent,
    CostaRicaComponent,
    CubaComponent,
    ChartDataCComponent,
    ChartDataMComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatDialogModule,
    ChartsModule ,
    

    
  ],
  providers: [VoyagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
