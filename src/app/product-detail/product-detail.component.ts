import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { SharedDataServiceService } from '../sevice/shared-data-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
//Product list + product detail component

// “Angular will assign this input later.”
  @Input() product!: Product;          // Parent -> Child
  @Output() close = new EventEmitter<void>(); // Child -> Parent

  constructor(private sharedDataService : SharedDataServiceService){}

  ngOnIt(){
    this.sharedDataService.product$.subscribe(product=>{
      if(product){
        this.product = product;
      }
    });
  }

  closeDetail() {
    this.close.emit();
  }
}
