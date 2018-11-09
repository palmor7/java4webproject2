import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

import { user } from './models/userModel';
import { from } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: user[] = [];
  
  registerUser(registerForm: NgForm){
    let newUser: user= {
      amka: registerForm.value.registerAmka,
      firstName: registerForm.value.registerfName,
      lastName: registerForm.value.registerlName,
      email: registerForm.value.registerEmail,
      userName: registerForm.value.registerUsername,
      password: registerForm.value.registerPassword,
      phone: registerForm.value.registerPhone
    }
    
    console.log(newUser);
    registerForm.reset();
    //$("#registerModal").modal("toggle");
    //$("#registerModal .close").click();
    
  }

  ngOnInit(){

  }
}
