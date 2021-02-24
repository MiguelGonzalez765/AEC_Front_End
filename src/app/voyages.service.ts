
import { Injectable } from '@angular/core';
// service
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//interface
import { Forfait } from './forfait';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  forfaitsUrl = 'https://forfaits-voyages.herokuapp.com/api/forfaits/';
  
  constructor(private http: HttpClient) { }

  getForfait(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl+'da/1996457');  
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
    console.log(forfait);
    return this.http.post<Forfait>(this.forfaitsUrl, forfait, httpOptions);
  }

  /**  mise à jour du forfait */
  updateForfait(forfait: Forfait): Observable<any> {
    const id = forfait._id;
    return this.http.put<Forfait>(this.forfaitsUrl +  id, forfait, httpOptions);
  }

   /**  suppression du forfait */
   deleteForfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitsUrl + id, httpOptions);
  }

}
