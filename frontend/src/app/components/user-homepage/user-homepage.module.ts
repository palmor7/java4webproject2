import {NgModule} from '@angular/core';
import {UserHomepageComponent} from './user-homepage.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	imports:[
	CommonModule,
	RouterModule.forChild([{
		path: '',
		component: UserHomepageComponent
	}])
	],
	declarations:[
		UserHomepageComponent
	]
})

export class UserhomepageModule {}