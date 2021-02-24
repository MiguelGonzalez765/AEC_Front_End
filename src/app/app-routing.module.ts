import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { NortComponent } from './nort/nort.component';
import { CostaRicaComponent } from './costa-rica/costa-rica.component';
import { CubaComponent } from './cuba/cuba.component';

 const routes: Routes = [

{ path: '', component: AccueilComponent },
{ path: 'apropos', component: AproposComponent },
{ path: 'nort', component: NortComponent},
{ path: 'costa-rica', component: CostaRicaComponent},
{ path: 'cuba', component: CubaComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
