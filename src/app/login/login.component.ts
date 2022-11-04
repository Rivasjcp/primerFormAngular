import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login = {
    email: '',
    password: ''
  }

  @ViewChild('myForm2') form2!: NgModel;

  onLogin(){
    console.log(this.login);
    this.form2.reset()
  }

}
