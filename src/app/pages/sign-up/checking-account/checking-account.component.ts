import { Component, OnInit } from '@angular/core';
import {FORM_STYLE} from "@app/core/constants/common.constant";

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.scss']
})
export class CheckingAccountComponent implements OnInit {
  account = '';
  formDataValid = true;
  accountNameAvailable = false;
  formStyle = FORM_STYLE;
  loading = false;
  constructor() { }

  ngOnInit(): void {
  }
  checkAccount() {
    if(!this.account || (this.account && this.account.trim().length < 5)) {
      this.formDataValid = false;
      this.accountNameAvailable = false;
      return;
    }
    this.formDataValid = true;
    this.loading = true;
    setTimeout(()=> {
        this.loading = false;
        this.accountNameAvailable = true;
    }, 500);
  }



}
