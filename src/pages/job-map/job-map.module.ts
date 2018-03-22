import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobMapPage } from './job-map';

@NgModule({
  declarations: [
    JobMapPage,
  ],
  imports: [
    IonicPageModule.forChild(JobMapPage),
  ],
})
export class JobMapPageModule {}
