import { Component } from '@angular/core';
import { HomeServiceProvider } from '../../../providers/home-service/home-service';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'home-jobs-list',
  templateUrl: 'home-jobs-list.html'
})
export class HomeJobsListComponent {

  public jobs = [];
  public limit:number = 5; // jobs  count

  constructor(
    private homeService: HomeServiceProvider,
    private navCtrl :   NavController
  ) {
    this.getJobsList();
  }

  getJobsList(){
    this.homeService.getLatestJobs({limit: this.limit}).then(res=>{
      console.log(res);
      if(res['code'] === 1){
        this.jobs = res['data'];
      }else{
        this.jobs = [];
      }
    })
  }

  navToMoreJobs(){
    console.log('导航到所有职位列表页面!');
    this.navCtrl.push('JobsPage');
  }

  itemSelected() {
    console.log("导航到职位详情页面！");
  }
}
