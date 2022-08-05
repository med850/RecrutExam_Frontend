import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {


id:any;
titre:any;
question={
    quiz:{id:'',},
    content:'',
    op1:'',
    op2:'',
    op3:'',
    op4:'',
    reponse:'',
};

  constructor(private route : ActivatedRoute, private questions:QuestionService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
   // console.log(this.id);
    this.titre = this.route.snapshot.params['titre'];

   this.question.quiz.id = this.id;



  }


  formSubmit(){
   // alert('clicked');

    if(this.question.content.trim() =='' || this.question.content == null){

      return;
    }


    if(this.question.op1.trim() =='' || this.question.op1 == null){

      return;
    }

    if(this.question.op2.trim() =='' || this.question.op2 == null){

      return;
    }


    if(this.question.reponse.trim() =='' || this.question.reponse == null){

      return;
    }

    this.questions.addQuestion(this.question).subscribe(
      (data:any)=>{
       
        Swal.fire('Succé', 'Question ajoutée avec succé', 'success');

        this.question.content='';
        this.question.op1 = "";
        this.question.op2 = "";
        this.question.op3 = "";
        this.question.op4 = "";
        this.question.reponse = "";
      },
      (error)=>{
        Swal.fire('Error', 'Erreur de cette action','error' );
      }
    );

  }

}
