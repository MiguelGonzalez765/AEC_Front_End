import { Hotel } from './hotel';

export interface Forfait {
   
    _id: string,
     da: string,
    destination: string,
    villeDepart: string,
    hotel: Hotel,
    dateDepart: string,
    dateRetour: string,
    prix: number,
    rabais: number,
    vedette: boolean,
    

}
