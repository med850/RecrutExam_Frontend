import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './simple-user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MatListModule} from '@angular/material/list';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { WelcomeComponent } from './admin/welcome/welcome.component';
import { ViewCategorieComponent } from './admin/view-categorie/view-categorie.component';
import { AddCategorieComponent } from './admin/add-categorie/add-categorie.component';
import { ViewQuizesComponent } from './admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionComponent } from './admin/view-quiz-question/view-quiz-question.component';
import { AddQuestionComponent } from './admin/add-question/add-question.component';
import { SidebarUserComponent } from './simple-user/sidebar-user/sidebar-user.component';
import { LoadQuizComponent } from './simple-user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './simple-user/instructions/instructions.component';
import { StartComponent } from './simple-user/start/start.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';










@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategorieComponent,
    AddCategorieComponent,
    ViewQuizesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionComponent,
    AddQuestionComponent,
    SidebarUserComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
