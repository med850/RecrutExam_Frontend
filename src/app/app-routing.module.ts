import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
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
          ],
},
{ path : 'user-dashboard', component : UserDashboardComponent, pathMatch : 'full', canActivate:[NormalGuard]},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
