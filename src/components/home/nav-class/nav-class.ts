import { Component } from '@angular/core';

/**
 * Generated class for the NavClassComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-class',
  templateUrl: 'nav-class.html'
})
export class NavClassComponent {

  constructor() { }

  public classfiyImgs = [
    {
      src: '/assets/lib/images/companys.png',
      title: '找企业',
      className: 'card1'
    },
    {
      src: '/assets/lib/images/jobs.png',
      title: '找工作',
      className: 'card2'
    },
    {
      src: '/assets/lib/images/jobfairs.png',
      title: '招聘会',
      className: 'card3'
    },
    {
      src: '/assets/lib/images/positions.png',
      title: '附近职位',
      className: 'card4'
    }
  ]
}
