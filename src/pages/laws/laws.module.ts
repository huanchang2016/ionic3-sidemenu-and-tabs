import { NgModule } from '@angular/core';
import { LawsPage} from './laws';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [LawsPage],
  imports: [IonicPageModule.forChild(LawsPage)],
})
export class LawsPageModule { }