import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-authencation',
  templateUrl: './header-authencation.component.html',
  styleUrls: ['./header-authencation.component.scss']
})
export class HeaderAuthencationComponent implements OnInit {
  user: any = null;

  constructor() { }

  ngOnInit(): void {
    // get user data
    this.user = localStorage.getItem('currentUser');
  }

}
