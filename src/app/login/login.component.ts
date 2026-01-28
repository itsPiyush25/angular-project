import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title : string  = 'Login Page';

  username : string = '';
  password : string = '';

  onLogin():void{
    console.log('username',this.username);
    console.log('password',this.password);
    
  }
}
