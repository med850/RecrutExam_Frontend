import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http : HttpClient) { }

  public categories(){

    return this.http.get(`${baseUrl}/categorie/`)

  }

  public addCat(categorie:any){

    return this.http.post(`${baseUrl}/categorie/`,categorie)

  }




}
