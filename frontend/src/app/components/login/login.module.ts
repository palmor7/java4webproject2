import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { UserhomepageAuthService } from '../../services/userhomepage-auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
	    {
	      path: '',
        component: LoginComponent,
        children: [
        {
          path: 'userhomepage',
              loadChildren: './components/user-homepage/user-homepage.module#UserhomepageModule',
              canActivate: [UserhomepageAuthService]
        }
        ]
		  }])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }