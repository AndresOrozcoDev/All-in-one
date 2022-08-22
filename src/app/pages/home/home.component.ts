import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  showPassword: boolean = false;
  isValid: boolean = true;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  signIn() {
    if(this.signInForm.valid) {
      this.isValid = true;
      console.log('Sign In ...', this.signInForm.value);
      this.route.navigate(['dashboard']);
    } else {
      console.log('Invalid', this.signInForm.value);
      this.isValid = false;
    }
    
  }

  get email() { 
    return this.signInForm.get('email'); 
  }

  get password() { 
    return this.signInForm.get('password'); 
  }

}
