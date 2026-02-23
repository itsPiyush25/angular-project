import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { interval, Observable, share } from 'rxjs';

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

  ngOnInit(){


    // cold observable implementation - each subscriber - separate execution.
      const cold$ = new Observable(observer => {
        console.log("Api call executed...")
        observer.next(Math.random());
      });

      cold$.subscribe(val => console.log('Subscriber 1 : ',val));
      cold$.subscribe(vla => console.log('Subscriber 2 : ',vla));

      // shared execution (single execution shared among the subscribers)
      const hot$ = interval(1000).pipe(share())

      hot$.subscribe(val => console.log('Sub 1 : ',val));

      setTimeout(() => {
        hot$.subscribe(val => console.log('Sub 2 :',val));

      },3000);
  
    }
}
