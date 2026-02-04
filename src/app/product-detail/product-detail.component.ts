import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
//Product list + product detail component

  @Input() product: any;          // Parent → Child
  @Output() close = new EventEmitter<void>(); // Child → Parent

  closeDetail() {
    this.close.emit();
  }
}
