import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { Observable, Observer } from 'rxjs';
import { of, from, interval, filter } from 'rxjs';
import { map, tap, reduce, take } from 'rxjs/operators';
import { Catalogue } from '../catalogue';




@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private produitserv: ProduitsService) {}
  catalogue$? : Observable<Catalogue[]>;
  ngOnInit(): void {
    this.catalogue$ = this.produitserv.getCatalogue();
  }


}
