import { Component } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';
import { ContractService } from '@app/core/services/contract.service';
import { WalletService } from '@app/core/services/wallet.service';

@Component({
  selector: 'app-transfer-token',
  templateUrl: './transfer-token.component.html',
  styleUrls: ['./transfer-token.component.scss'],
})
export class TransferTokenComponent {
  btnColor = BTN_COLOR_GRADIENT;
  address = '';
  addressTransfer = '';
  invalidName = false;
  constructor(private contractService: ContractService, private walletService: WalletService) {}

  checkWallet() {
    this.invalidName = false;
    if (this.address.length > 0 && !(this.address.startsWith('aura') && this.address.length > 20)) {
      this.contractService
        .queryContractSmart({
          address_of: {
            token_id: this.address,
          },
        })
        .subscribe({
          next: e => {
            console.log(e);
            this.invalidName = false;
          },
          error: e => {
            this.invalidName = true;
            console.log(e);
          },
          complete: () => {
            this.invalidName = false;
          },
        });
    }
  }

  transferToken() {
  }
}
