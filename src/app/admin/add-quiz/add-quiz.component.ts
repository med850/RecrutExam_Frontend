import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategorieService } from 'src/app/services/categorie.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {


  quizData = {
    titre:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:true,
    categorie:{
      id:'',
    },
  };


  categories : any = [];

  constructor(private cat : CategorieService, private snak : MatSnackBar, private quiz:QuizService) { }

  ngOnInit(): void {

    this.cat.categories().subscribe(
      (data:any)=>{
        this.categories = data;
        //console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur!!', 'Erreur de récuperation des données', 'error');
      }
    );


  }

  addQuiz(){

 // console.log(this.quizData);

 if(this.quizData.titre.trim() == '' || this.quizData.titre == null){


  this.snak.open('Titre est un champ obligatoire !!','',{
    duration:3000,
  });
  return;

 }


 this.quiz.addQuiz(this.quizData).subscribe(
  (data:any)=>{
    Swal.fire('Succé', 'Examen ajouté avec succé', 'success');


    console.log(data);

   this.quizData = {
      titre:'',
      description:'',
      maxMarks:'',
      numberOfQuestion:'',
      active:true,
      categorie:{
        id:'',
      },


     
  };



 
},
(error)=>{
  Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
  console.log(error);
});


}



}
