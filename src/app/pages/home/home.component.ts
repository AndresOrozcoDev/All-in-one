import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('a-zA-Z')]),
    password: new FormControl('', [Validators.required, Validators.pattern('0-9')])
  });

  showPassword: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  get email() { 
    return this.signInForm.get('email'); 
  }

  get password() { 
    return this.signInForm.get('password'); 
  }

}
