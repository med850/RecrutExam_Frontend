import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId:any;
  quizzes:any;

  constructor(private route : ActivatedRoute, private quiz : QuizService) { }

  ngOnInit(): void {

    this.catId = this.route.snapshot.params['catId'];

    this.route.params.subscribe((params)=>{
      //console.log(params);
      this.catId = params['catId'];

      if(this.catId == 0){
        console.log('Load all the quiz');
  
        this.quiz.getActiveQuizzes().subscribe((data:any)=>{
          this.quizzes = data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error);
          alert('Erreur de cette action');
        });
  
      }else{
        console.log('Load specific quiz');
       
        this.quiz.getActiveQuizzesOfCategorie(this.catId).subscribe(
          (data:any)=>{
            this.quizzes = data;
          },
          (error)=>{
            alert('erreur');
          }
        );
      }



    });

   // this.catId = this.route.snapshot.params['catId'];
    //console.log(this.catId);
   

  }

}
