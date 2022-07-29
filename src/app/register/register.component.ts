import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public user = {

    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',

  };


  ngOnInit(): void {
  }

  formSubmit(){

   // alert('Submit');
   console.log(this.user);
   if(this.user.username==''|| this.user.username==null){
    alert('Username is required');
    return;
   }


  }

}
