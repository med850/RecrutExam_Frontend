import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  categories:any;
  constructor(private cat : CategorieService, private snack : MatSnackBar) { }

  ngOnInit(): void {
    this.cat.categories().subscribe((data)=>{
      this.categories = data;
    },
    (error)=>{
      this.snack.open('Erreur au cours de récupération des catégories', '', {
        duration:3000,
      });
    });



  }

}
