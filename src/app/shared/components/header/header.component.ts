import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  isMobile: boolean = false;
  showMobileMenu: boolean = false;

  constructor() {
    this.checkScreenWidth();
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  private checkScreenWidth() {
    this.isMobile = window.innerWidth <= 576;
  }
  closeMenu() {
    this.showMobileMenu = false;
  }
  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 576;
    this.showMobileMenu = false;
  }}

