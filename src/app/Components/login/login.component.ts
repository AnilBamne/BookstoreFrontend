import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
condition=true
  constructor() { }

  ngOnInit(): void {
  }
  CheckLogin(){
    this.condition=true;
  }
  CheckSignup(){
    this.condition=false
  }
}
