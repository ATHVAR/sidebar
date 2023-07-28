



import { Component, OnInit } from '@angular/core';
import { INavbarData } from './helper';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  collapsed = false;
  navData: INavbarData[] = navbarData;

  constructor(private router: Router) {} 

  ngOnInit(): void {}

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  }
  logout(){
    // after implementing tokenization
    // localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
