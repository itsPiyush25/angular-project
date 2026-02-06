import { Component } from '@angular/core';
import { LoginRequest, LoginUser } from './login.model';
import { AuthService } from '../sevice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title : string  = 'Login Page';
  username : string = '';
  password : string = '';

  constructor(private authService : AuthService){}


  onLogin():void{
    
    // console.log('username',this.username);
    // console.log('password',this.password);

    const loginData: LoginRequest = {
      username : this.username,
      password : this.password,
      // email : this.email
    };

    const isValid = this.authService.login(loginData);

    if (isValid) {
      console.log(this.authService.getWelcomeMessage());
      alert('Login successful');
    } else {
      alert('Invalid credentials');
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
