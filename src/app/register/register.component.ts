import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  @ViewChild('myForm') form!: NgModel;

  onRegister(){
    console.log(this.register);
    this.form.reset()
  }
}
