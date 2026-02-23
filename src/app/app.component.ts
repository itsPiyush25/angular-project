import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from './sevice/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private productService : ProductService){}

  // ngOnInit(){
  //   this.productService.getProductList().subscribe((data:any)=>{
  //     console.log(data)
  //  })
  // }

  profileForm = new FormGroup({
    name : new FormControl(),
    password : new FormControl(),
    email : new FormControl()
  })

  onSubmit(){
    console.log("form submitted...")
  }

  setValue(){
    this.profileForm.setValue({
      name : 'PJ',
      password : 'Dev@2026',
      email : 'piyushjogi23@gmail.com'
    })
  }
}
