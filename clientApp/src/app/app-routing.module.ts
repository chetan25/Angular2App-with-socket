import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGaurdService } from './auth-gaurd/auth-gaurd.service';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { CarouselComponentComponent } from './components/carousel-component/carousel-component.component';
import { ChatComponent } from './components/chat/chat.component';
import { TodoComponent } from './components/todo/todo.component';


/**
* Angular routes for front end views
*/
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: DashboardComponent, canActivate: [AuthGaurdService],
      children: [
        {path:'', redirectTo: 'todo', pathMatch: 'full'},
        {path: 'todo', component: TodoComponent},
        {path: 'chat', component: ChatComponent}
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
