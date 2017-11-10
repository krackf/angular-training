import { Product } from './../models/product.model';
import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
@Input() productList: Product[];

// Def du contructeur où on crée un event
@Output() onProductSelected: EventEmitter<Product>;
  constructor() {
    this.onProductSelected = new EventEmitter();
   }

// déf méthode click() sur le product qui émet un event
   clicked(product) {
    console.log('internal list ', product);
    this.onProductSelected.emit(product);
  }
//

  ngOnInit() {
  }

}