import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categorie',
  templateUrl: './view-categorie.component.html',
  styleUrls: ['./view-categorie.component.css']
})
export class ViewCategorieComponent implements OnInit {

  categories :any = [];
  constructor(private cat:CategorieService) { }

  ngOnInit(): void {

    this.cat.categories().subscribe(
      (data : any)=>{
        this.categories = data;
        console.log(this.categories);

      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      });


  }

}
