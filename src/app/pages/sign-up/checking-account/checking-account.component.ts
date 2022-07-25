import { Component } from '@angular/core';
import { FORM_STYLE } from '@app/core/constants/common.constant';

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.scss'],
})
export class CheckingAccountComponent {
  account = '';
  formDataValid = true;
  accountNameAvailable = false;
  accountNameUnAvailable = false;
  formStyle = FORM_STYLE;
  loading = false;
  typing = false;

  checkAccount() {
    this.typing = false;
    if (!this.account || (this.account && this.account.trim().length < 5)) {
      this.formDataValid = false;
      this.accountNameAvailable = false;
      this.accountNameUnAvailable = false;
      return;
    }
    this.formDataValid = true;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.accountNameAvailable = true;
    }, 500);
  }

  checkAccountTyping() {
    this.account.length > 0 ? this.typing = true : this.typing = false;
    setTimeout(() => {
      this.typing = false;
    }, 800);
  }
}
