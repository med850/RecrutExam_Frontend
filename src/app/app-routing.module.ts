import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategorieComponent } from './admin/add-categorie/add-categorie.component';
import { AddQuestionComponent } from './admin/add-question/add-question.component';
import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './admin/update-quiz/update-quiz.component';
import { ViewCategorieComponent } from './admin/view-categorie/view-categorie.component';
import { ViewQuizQuestionComponent } from './admin/view-quiz-question/view-quiz-question.component';
import { ViewQuizesComponent } from './admin/view-quizes/view-quizes.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { InstructionsComponent } from './simple-user/instructions/instructions.component';
import { LoadQuizComponent } from './simple-user/load-quiz/load-quiz.component';
import { StartComponent } from './simple-user/start/start.component';
import { UserDashboardComponent } from './simple-user/user-dashboard/user-dashboard.component';

const routes: Routes = [

{ path : '', component : HomeComponent, pathMatch : 'full'},
{ path : 'inscription', component : RegisterComponent, pathMatch : 'full'},
{ path : 'connexion', component : LoginComponent, pathMatch : 'full'},
{ path : 'admin', component : DashboardComponent,canActivate:[AdminGuard], 
  children:[{
  path : 'profile', component : ProfileComponent,
            },
            {
  path : '', component : WelcomeComponent
            }, 

            {
  path : 'categories', component : ViewCategorieComponent
            }, 

            {
   path : 'add-categorie', component : AddCategorieComponent
            },
            
            
            {
  path : 'quizes', component : ViewQuizesComponent
            },


            {
  path : 'add-quiz', component : AddQuizComponent
            },

            {
  path : 'quiz/:id', component : UpdateQuizComponent
            },

            {
  path : 'view-questions/:id/:titre', component : ViewQuizQuestionComponent
            },

            {
  path : 'add-question/:id/:titre', component : AddQuestionComponent
            },


          ],
},
{ path : 'user-dashboard', component : UserDashboardComponent, canActivate:[NormalGuard],
  children:[{
        path:':catId',
        component:LoadQuizComponent, 
             },

             {
        path:'instructions/:id',
        component:InstructionsComponent,
        canActivate:[NormalGuard], 
              },
]},

{
  path:'start/:id',
  component:StartComponent, 
        },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
