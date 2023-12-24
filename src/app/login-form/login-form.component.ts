import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/models/patient';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mail: [null, Validators.required],
      mdp: ['', Validators.required]
    });
  }
  submit(){
    const compte:string[] = [
      this.loginForm.value.mail,
      this.loginForm.value.mdp
    ];
    console.log("login:",compte);
  }
}
