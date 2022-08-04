import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {

  quizes:any = [];


  constructor(private quiz : QuizService) { }

  ngOnInit(): void {

    this.quiz.quizes().subscribe(
      (data:any)=>{
        this.quizes = data;
        console.log(this.quizes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      }
    );



  }



  deleteQuiz(id:any){
   // alert(id);

   Swal.fire({
    icon : 'info',
    title : 'Vous-ètes sùr ?',
    confirmButtonText : 'Supprimer',
    showCancelButton : true,
   }).then((result)=>{
    if(result.isConfirmed){
      this.quiz.deleteQuiz(id).subscribe(
        (data)=>{
          this.quizes = this.quizes.filter((quiz:any)=>quiz.id!=id);
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
