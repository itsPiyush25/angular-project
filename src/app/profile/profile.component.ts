import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    constructor (private fb : FormBuilder){}

    profileForm = this.fb.group(
      {
        firstName : ['',Validators.required],
        lastName : ['',Validators.required],
        address : this.fb.group({
          city : ['',Validators.required],
          zip : ['',[Validators.pattern(/^\d{6}$/)]]
        })
      }
    );

    // profileForm = new FormGroup({
    //   firstName : new FormControl(''),
    //   lastName : new FormControl('')
    // });

}
