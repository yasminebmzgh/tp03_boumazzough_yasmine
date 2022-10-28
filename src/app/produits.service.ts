import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Catalogue } from './catalogue';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor() { }
  tabValeur: Array<String> = [];

  catalogue: Array<Catalogue>  = [
    { title: 'linux', price: 9.5 },
    { title: 'angular', price: 8.5 },
    { title: 'java', price: 6.5 },
    { title: 'windows', price: 8.0 },
    { title: 'docker', price: 7.5 },
  ];


  postClient(){}
  getClient(){}
  postLogin(){}
  getCatalogue() : Observable<Catalogue[]>{
    return of(this.catalogue);
  }


}
