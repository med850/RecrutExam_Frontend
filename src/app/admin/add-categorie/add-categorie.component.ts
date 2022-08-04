import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorie={
    titre:'',
    description:'',

  };


  constructor(private category : CategorieService, private snack : MatSnackBar) { }

  ngOnInit(): void {
  }


  formSubmit(){
    if(this.categorie.titre.trim() == '' || this.categorie.titre == null){

      this.snack.open('Titre est champ obligatoire !!', '', {
        duration:3000
      });
      return;


    }

    this.category.addCat(this.categorie).subscribe(
      (data:any)=>{
        this.categorie.titre='';
        this.categorie.description='';
        Swal.fire('Succé!!', 'Catégorie ajoutée avec succée', 'success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur!!', 'Erreur','error');
      })

      
  }

}
