import { Component, OnInit } from '@angular/core';
import { UserService } from '../sevice/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-smart-comp',
  templateUrl: './smart-comp.component.html',
  styleUrls: ['./smart-comp.component.scss']
})
export class SmartCompComponent implements OnInit {

  users : User[] = [];
  loading = false;
  error : string | null = null;

  constructor(private userService : UserService){}
  
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() : void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next : (data)=> {
        this.users = data;
        this.loading = false;
      },
      error: () =>{
        this.error = 'Failed to loading';
        this.loading = false;
      }
    });
  }

  onDeleteUser(id : number):void{
    this.userService.deleteUser(id).subscribe(()=>{
        this.users = this.users.filter(user => user.id !== id);
    });
  }

}
