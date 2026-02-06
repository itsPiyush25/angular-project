import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { SharedDataServiceService } from '../sevice/shared-data-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

   products: Product[] = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 3000}
  ];

   constructor(private sharedDataService : SharedDataServiceService ){}

  selectedProduct(product : Product){ 
    this.sharedDataService.setProduct(product);
  }
}
