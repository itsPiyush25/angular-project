import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'pj-angular-app';
  username = 'piyush';
  count = 7;
  name = '';
  login = false
  isActive = true
  isError = false

  courseList = ["DBMS","java","angular","spring boot","docker","K8","Postgres"];

  courseInfo = [
    {
      name : 'piyush',
      age : 24,
      email : 'piyush.jogi@neosoftmail.com'
    },
    {
      name : 'puneet',
      age : 25,
      email : 'puneet.arya@neosoftmail.com'
    },
    {
      name : 'manav',
      age : 28,
      email : 'manav.singh@neosoftmail.com'
    }
  ]

  isDisabled = true;
  display = false;
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset(){
    this.count = 0;
  }



}
