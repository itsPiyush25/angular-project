import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../sevice/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {


  addUser(arg0: any) {
    throw new Error('Method not implemented.');
  }

  userForm!: FormGroup;
  userId?: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(user =>
        this.userForm.patchValue(user)
      );
    }
  }

  submit() {
    if (this.userId) {
      this.userService.updateUser(this.userId, this.userForm.value)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.userService.createUser(this.userForm.value)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
