import { Component } from '@angular/core';
import { LoginRequest } from '../login/login.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  username = '';
  password = '';
  email = '';

  constructor(private authService: AuthService) {}

  onSignUp(): void {

    if (!this.username || !this.password || !this.email) {
      alert('All fields are required!');
      return;
    }

    const signUpData: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.register(signUpData);
    alert('Signup successful! You can now login.');
  }
}
