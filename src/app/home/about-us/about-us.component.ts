import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutUsComponent {
  images = ['assets/images/priyanka.png','assets/images/alekya.png','assets/images/prasanna.png','assets/images/dhanush.png','assets/images/guna.jpg','assets/images/aditya.png','assets/images/manikandan.jpg','assets/images/harsha.jpg','assets/images/sai.jpg','assets/images/shambhavi.png'];

}
