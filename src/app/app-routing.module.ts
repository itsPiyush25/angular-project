import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path : 'welcome', component : WelcomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'sign-up', component : SignUpComponent},
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: '', component: UserListComponent },
  { path: 'add', component: UserFormComponent },
  { path: 'edit/:id', component: UserFormComponent },
  // wildcard for unmentioned path
  { path : '**', component : ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
