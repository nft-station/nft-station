import { Component } from '@angular/core';
import { FORM_STYLE } from '@app/core/constants/common.constant';
import { ContractService } from '@app/core/services/contract.service';

@Component({
  selector: 'app-checking-account',
  templateUrl: './checking-account.component.html',
  styleUrls: ['./checking-account.component.scss'],
})
export class CheckingAccountComponent {
  account = '';
  formDataValid = true;
  accountNameAvailable = null;
  formStyle = FORM_STYLE;
  loading = false;

  canRegister = false;

  constructor(private contractService: ContractService) {}

  allNFTs() {
    this.contractService
      .queryContractSmart({
        all_tokens: {},
      })
      .subscribe({
        next: e => {
          console.log(e);
        },
        error: e => {
          console.log(e);
        },
        complete: () => {},
      });
  }

  tokenOf() {
    this.contractService
      .queryContractSmart({
        all_operators: {
          owner: 'aura103d2neftkpce223utyz9sc55a8x8ktl44ue9v2',
        },
      })
      .subscribe({
        next: e => {
          console.log(e);
        },
        error: e => {
          console.log(e);
        },
        complete: () => {},
      });
  }

  checkAccount() {
    this.loading = true;

    this.contractService
      .queryContractSmart({
        address_of: {
          token_id: this.account,
        },
      })
      .subscribe({
        next: e => {
          console.log(e);
          // {owner: "aura103d2neftkpce223utyz9sc55a8x8ktl44ue9v2"}
          this.formDataValid = false;
          this.accountNameAvailable = (e as any).owner;

          this.canRegister = false;
        },
        error: _ => {
          this.formDataValid = true;
          this.accountNameAvailable = null;
          this.canRegister = true;

          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
  }
}
