import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 }
  ];

  constructor(private router: Router) {}

  viewDetails(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
}
