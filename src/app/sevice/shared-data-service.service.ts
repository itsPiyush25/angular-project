import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  // constructor() { }

   private productSource = new BehaviorSubject<Product | null>(null);
   product$ = this.productSource.asObservable();

   setProduct(product: Product) {
    this.productSource.next(product);
  }
}
