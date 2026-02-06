import { Injectable } from '@angular/core';
import { LoginRequest, LoginUser } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registeredUser: LoginUser | null = null;

  register(data: LoginRequest): void {
    this.registeredUser = new LoginUser(data);
    console.log('User registered:', this.registeredUser);
  }

  login(data: LoginRequest): boolean {
    if (!this.registeredUser) {
      alert('No user registered!');
      return false;
    }

    return this.registeredUser.validateLogin(data.password);
  }

  getWelcomeMessage(): string {
    return this.registeredUser
      ? this.registeredUser.getWelcomeFromLogin()
      : '';
  }
}
