import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserHomepageComponent } from './components/user-homepage/user-homepage.component';
import { AppComponent } from './app.component';
import { UserhomepageAuthService } from './services/userhomepage-auth.service';
import { LoginpageAuthService } from './services/loginpage-auth.service';

const routes: Routes = [
{ 
	path: '', 
	component: AppComponent,
	children: [{
		path:'',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
        loadChildren: './components/home/home.module#HomeModule',
       canActivate: [LoginpageAuthService]
	},
	{
		path: 'login',
        loadChildren: './components/login/login.module#LoginModule',
        canActivate: [LoginpageAuthService]
	},
	{
		path: 'userhomepage',
        loadChildren: './components/user-homepage/user-homepage.module#UserhomepageModule',
        canActivate: [UserhomepageAuthService]
	},
	{
		path: 'register',
        loadChildren: './components/register/register.module#RegisterModule',
	},
	{
		path: '**',
        redirectTo: 'home'
	}
	] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
