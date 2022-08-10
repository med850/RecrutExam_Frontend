import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

 id:any;
 questions:any


 marksGot = 0;
 correctAnswer = 0;
 attempted = 0;

  isSubmit= false;


  constructor(private locationSt : LocationStrategy, private route : ActivatedRoute, private question : QuestionService, private router:Router) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.loadQuestion();
  }



  loadQuestion(){
    this.question.getQuestionOfQuizForTest(this.id).subscribe((
      data:any)=>{
      //  console.log(data);
      this.questions = data;

        this.questions.forEach((q:any) => {

          q['givenAnswer'] = '';

        });

        console.log(this.questions);

      },
      (error)=>{
        console.log(error);
        Swal.fire("Error", "Erreur de récupération", 'error'); 
      });
  }

//Désactiver le retour
  preventBackButton(){
    history.pushState(null,'',location.href);
  
    this.locationSt.onPopState(()=>{
      history.pushState(null, '', location.href);
    });
  
  
  }



  submitQuiz(){

    Swal.fire({
      title:'Vous-etes sùr ?',
      showCancelButton:true,
      confirmButtonText:'Valider',
      icon:'info',
    }).then((result)=>{
      if(result.isConfirmed){
        
        this.isSubmit=true;

        this.questions.forEach((q:any)=>{

          if(q.givenAnswer == q.reponse){

            this.correctAnswer++;
            let marksSingle = 
              this.questions[0].quiz.maxMarks / this.questions.length;
              this.marksGot+=marksSingle;
          }


          if(q.givenAnswer.trim() == ''){
            this.attempted++;
          }
 

        });


        console.log('reponse correct :' +this.correctAnswer);
        console.log('marks got :' +this.marksGot);
        console.log(this.questions);
        console.log('attempted : ' +this.attempted);




      }
    });


  }





}
