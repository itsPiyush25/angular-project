import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pj-angular-app';
  username = 'piyush';
  count = 7;
  name = '';

  isDisabled = true;

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
