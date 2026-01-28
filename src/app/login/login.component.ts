import { Component } from '@angular/core';
import { LoginRequest, LoginUser } from './login.model';

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
    
    // console.log('username',this.username);
    // console.log('password',this.password);

    const loginData: LoginRequest = {
      username : this.username,
      password : this.password,
      // email : this.email
    };

    if(!this.username || !this.password){
      alert("Username/Password required...");
      return;
    }

    console.log('Login request:',{
      username : this.username,
      password : this.password
    })

     const user = new LoginUser({
        username : 'piyush',
        password : 'Jarvis@26'
    });

    console.log(user.getWelcomeFromLogin());
    console.log(user.validateLogin('jarvis'));

  }
}
