import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {


  id:any;
  quizz:any;

  constructor(private route :ActivatedRoute, private quiz : QuizService, private router : Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    //console.log(this.id);
  
    this.quiz.getQuizById(this.id).subscribe(
      (data:any)=>{
       // console.log(data);
       this.quizz = data;
      },
      (error)=>{
        alert('Erreur de récupération');
      }
    );
  
  
  
  }


  startQuiz(){
    Swal.fire({
      title:'Tu veux commencer ?',
      showCancelButton:true,
      confirmButtonText:'Oui',
      denyButtonText:'Annuler',
      icon:'info'
      
    }).then((result)=>{
      if(result.isConfirmed){
      this.router.navigate(['/start/' + this.id]);
      }else if(result.isDenied){
       // Swal.fire('Annulation confirmé','', 'info');
      }
    })
  }





}
