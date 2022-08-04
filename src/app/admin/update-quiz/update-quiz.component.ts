import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {


  constructor(private route:ActivatedRoute, private quiz : QuizService, private cat : CategorieService, private router : Router) { }

  qId = 0;
  quizz : any;
  categories : any = [];
  
  ngOnInit(): void {

    this.qId = this.route.snapshot.params['id'];

    //alert(this.qId);

    this.quiz.getQuizById(this.qId).subscribe((
      data)=>{
        this.quizz = data;
        console.log(this.quizz); 
      },
      (error)=>{
        console.log(error);
      });


      this.cat.categories().subscribe(
        (data:any)=>{
          this.categories = data;
        },
        (error)=>{
          alert('Erreur au cours de récupération des catégories');
        }
      );


  }


  updateData(){

    //alert('clicked');

    this.quiz.updateQuiz(this.quizz).subscribe(
      (data)=>{
        Swal.fire('Success !!', 'Examen modifié avec succé', 'success').then((e)=>{
          this.router.navigate(['/admin/quizes']);
        });
      },
      (error)=>{
        Swal.fire('Error', 'Erreur de modification', 'error');
        console.log(error);
      });

  }





}
