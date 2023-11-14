import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scremer',
  templateUrl: './scremer.component.html',
  styleUrls: ['./scremer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ScremerComponent {
  title = 'Scremer';
  navigateToScremer() {
    window.open('https://www.scremer.com', '_blank');
  }
  
  constructor(private titleService:Title){
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
 
  
}
