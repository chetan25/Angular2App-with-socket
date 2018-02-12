import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ReactiveFormsModule } from "@angular/forms";

//services
import { SocketConnectionService } from './services/socket-connection.service';
import { RegisterService } from './services/register.service';
import { AuthGaurdService } from './auth-gaurd/auth-gaurd.service';
import { UserValidateService } from './services/user-validate.service';

//store
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, Store } from '@ngrx/store';
import { userReducer } from './redux-states/user/user-reducer';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { CarouselComponentComponent } from './components/carousel-component/carousel-component.component';
import { ChatComponent } from './components/chat/chat.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    CardComponentComponent,
    TodoListComponent,
    TodoListItemComponent,
    CarouselComponentComponent,
    ChatComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    StoreModule.forRoot({ 
      user: userReducer
    }),
  ],
  providers: [
    UserValidateService,
    RegisterService,
    AuthGaurdService,
    SocketConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
