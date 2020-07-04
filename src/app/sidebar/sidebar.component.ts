import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/maps', title: 'Covid Updates',  icon: 'pe-7s-graph', class: '' },
    { path: '/destination', title: 'Destination Updates',  icon:'pe-7s-map-marker', class: '' },
    { path: '/flights', title: 'Flights',  icon:'pe-7s-plane', class: '' },
    { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: '/typography', title: 'History',  icon:'pe-7s-news-paper', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/icons', title: 'Service and Hospitality',  icon:'pe-7s-map-2', class: '' },
    { path: '/upgrade', title: 'Admin Access',  icon:'pe-7s-note2', class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
