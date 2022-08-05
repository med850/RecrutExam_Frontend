import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.css']
})
export class ViewQuizQuestionComponent implements OnInit {

  //qid:any;
  id:any;
  titre:any;
  questions : any = []; 



  constructor(private route : ActivatedRoute, private question:QuestionService, private snack : MatSnackBar) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.titre = this.route.snapshot.params['titre'];

    console.log(this.id);
    console.log(this.titre);

    this.question.getQuestionOfQuiz(this.id).subscribe(
      (data:any)=>{
        console.log(data);
      //  console.log('success');
        this.questions = data;
      },
      (error)=>{
        console.log(error);
      }
    )

  }




  deleteQuestion(id:any){

  // alert(qid);
 /*  Swal.fire({
    icon:'info',
    showCancelButton:true,
    confirmButtonText:'Supprimer',
    title:'Vous-etes sùr ?'}).then((result)=>{
   // alert('test');

    if(result.isConfirmed){

      this.question.deleteQuestion(qid).subscribe(
        (data)=>{

          this.snack.open('Question supprimée avec succé', '', {
            duration:3000,
          });
          this.questions = this.questions.filter((question:any)=>
              question.id != qid)
        },
        (error)=>{
          this.snack.open('Erreur pour cette action', '',{
            duration:3000,
          });
          console.log(error);
        }
      );
    }



   });*/



   Swal.fire({
    icon : 'info',
    title : 'Vous-ètes sùr ?',
    confirmButtonText : 'Supprimer',
    showCancelButton : true,
   }).then((result)=>{
    if(result.isConfirmed){
      this.question.deleteQuestion(id).subscribe(
        (data)=>{
          this.questions = this.questions.filter((question:any)=>question.id!=id);
          Swal.fire('Succé', 'Examen supprimée avec succé', 'success');
        },
        (error)=>{
          Swal.fire('Erreur', 'Erreur de suppression', 'error');
  
        }
      );
    }
   });


  




  }




}
