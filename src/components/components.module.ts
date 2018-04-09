import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SliderComponent } from './home/slider/slider';
import { NavClassComponent } from './home/nav-class/nav-class';
import { HomeJobsListComponent } from './home/home-jobs-list/home-jobs-list';

@NgModule({
	declarations: [
		SliderComponent,
		NavClassComponent,
    	HomeJobsListComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		SliderComponent,
		NavClassComponent,
    	HomeJobsListComponent
	]
})
export class ComponentsModule { }
