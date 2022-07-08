import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-authentication',
  templateUrl: './header-authentication.component.html',
  styleUrls: ['./header-authentication.component.scss'],
})
export class HeaderAuthenticationComponent implements OnInit {
  user: any = null;

  constructor() {}

  ngOnInit(): void {
    // get user data
    this.user = localStorage.getItem('currentUser');
  }
}
