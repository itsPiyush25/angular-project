import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  message : string  = 'angular version@16'
  username = 'elon'
  password = 'TEsla@2026'
    
  handleLogin(){
      console.log(this.username)
  }

  ngOnInit() {
  }
}
