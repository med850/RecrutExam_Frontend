import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }


  public getQuestionOfQuiz(id:any){


    return this.http.get(`${baseUrl}/question/quiz/all/${id}`);

  }


  public addQuestion(question:any){

    return this.http.post(`${baseUrl}/question/`, question);

  }


  public deleteQuestion(id:any){

    return this.http.delete(`${baseUrl}/question/${id}`);
  }




  
}
