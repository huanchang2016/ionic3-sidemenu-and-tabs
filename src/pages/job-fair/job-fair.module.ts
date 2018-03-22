import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobFairPage } from './job-fair';

@NgModule({
  declarations: [
    JobFairPage,
  ],
  imports: [
    IonicPageModule.forChild(JobFairPage),
  ],
})
export class JobFairPageModule {}
