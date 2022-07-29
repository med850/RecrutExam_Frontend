import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService:UserService,
    private snack:MatSnackBar
  ) { }

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
   // alert('Username is required');
   this.snack.open('Tous les champs sont obligatoire','',{
    duration:3000,
   // horizontalPosition:'right',
   });
    return;
   }

   this.userService.addUser(this.user).subscribe(
    (data)=> {
      console.log(data);
    //  alert('Success');

    Swal.fire('Succé', 'Utilisateur crée avec succé')

    },
    (error)=>{
      console.log(error);
     // alert('Somthing went wrong');
     this.snack.open('Un problème quelque part', '', {
      duration:3000,
     })
    }
   );

  }

}
