import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TodayComponent} from './today/today.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ 
	{path: '', component: HomeComponent},
	{
		path: 'today', 
		component: TodayComponent,
		canActivate: [AuthGuard]
	},
	{path: 'login', component: LoginComponent},

];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }
