import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variables
  public userName: string;
  public userEmail: string;
  public error: string;

  constructor() {}

  ngOnInit() {
    // code starts
    this.userEmail = 'abc.com'
  }

  onSubmit() {
    console.log('userName: '+this.userName);
    console.log('userEmail: '+this.userEmail);
    
    if(this.userName == 'undefined' || this.userEmail=='undefined'){
      this.error = 'Invalid username'
    }
    console.log('form submitted !');

  }

}
