import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 3000 }
  ];

  selectedProduct: any;

  onProductSelected(product: any) {
    this.selectedProduct = product;
  }
}
