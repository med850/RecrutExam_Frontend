import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  public loginStatusSubject = new Subject<boolean>();


  constructor(private http:HttpClient) { }


  public generateToken(loginData:any){

    return this.http.post(`${baseUrl}/generate token`, loginData);
  }

//générer un token dans localStorage
  public loginUser(token:any){

    localStorage.setItem('token', token);
   // this.loginStatusSubject.next(true);
    return true;

  }

//tester la connectivité d'users
  public isLoggedIn(){

    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){

      return false;


    }else{

      return true;
    }

  }

//Supprimer le token en cas de déconnexion
  public logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;


  }


  public getToken(){


    return localStorage.getItem('token');

  }

//donner les détails users
  public setUser(user:any){

    localStorage.setItem('user', JSON.stringify(user));


  }

//récupérer un user
  public getUser(){

    let userStr = localStorage.getItem('user');
    if(userStr!=null){

      return JSON.parse(userStr);

    }else{

      this.logout();
      return null;

    }

  }

  //récupérer le role d'utilisateur
  public getUserRole(){

    let user = this.getUser();
    return user.authorities[0].authority;


  }


  public getCurrentUser(){

    return this.http.get(`${baseUrl}/current-user`);

  }

}
