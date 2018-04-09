import { Component } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {

  constructor() { }

  public sliderImgs = [
    '/assets/lib/images/1.png',
    '/assets/lib/images/2.png',
    '/assets/lib/images/3.png',
    '/assets/lib/images/4.png',
    '/assets/lib/images/5.png',
    '/assets/lib/images/6.png',
  ];
}
