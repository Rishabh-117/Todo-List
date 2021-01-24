import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component'
import { RouteGuardService } from './service/route-guard.service'

const routes: Routes = [
{path:'login', component: LoginComponent},
{path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
{path:'', component: LoginComponent},
{path:'todos', component: ListTodoComponent, canActivate:[RouteGuardService]},
{path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
{path:'todos/:id', component: UpdateTodoComponent, canActivate:[RouteGuardService]},
{path:'**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
