import { Component, OnInit } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';
import { OwnerNFTDto } from '@app/core/models/common.model';
import { ContractService } from '@app/core/services/contract.service';
import { GToastrService } from '@app/core/services/toast.service';
import { WalletService } from '@app/core/services/wallet.service';
import { Key } from '@keplr-wallet/types';

@Component({
  selector: 'app-transfer-token',
  templateUrl: './transfer-token.component.html',
  styleUrls: ['./transfer-token.component.scss'],
})
export class TransferTokenComponent implements OnInit {
  btnColor = BTN_COLOR_GRADIENT;
  recipientAddress = '';
  addressTransfer = '';
  invalidName = false;
  accountKey: Key | undefined;

  isLoading = false;

  sendAmount = '';

  constructor(
    private contractService: ContractService,
    private walletService: WalletService,
    private toast: GToastrService
  ) {}

  ngOnInit(): void {
    this.walletService.account$.subscribe({
      next: key => (this.accountKey = key),
    });
  }

  checkWallet() {
    this.invalidName = false;
    this.addressTransfer = '';
    if (
      this.recipientAddress.length > 0 &&
      !(this.recipientAddress.startsWith('aura') && this.recipientAddress.length > 20)
    ) {
      this.contractService
        .queryContractSmart({
          address_of: {
            token_id: this.recipientAddress,
          },
        })
        .subscribe({
          next: e => {
            this.invalidName = false;

            this.addressTransfer = (e as OwnerNFTDto).owner;
          },
          error: e => {
            this.invalidName = true;
          },
          complete: () => {
            this.invalidName = false;
          },
        });
    }
  }

  transferToken() {
    if (!this.accountKey?.bech32Address) {
      return;
    }
    const { senderAddress, recipientAddress, amount, memo, fee } = this.makeTxData();

    if (senderAddress) {
      this.isLoading = true;
      this.contractService.signer
        ?.sendTokens(senderAddress, recipientAddress, amount, fee, memo)
        .then(_ => {
          this.toast.success('Transfer Success');
          this.sendAmount = '';
          this.recipientAddress = '';
          this.addressTransfer = '';

          this.isLoading = false;
        })
        .catch(_ => {
          this.toast.error('Transfer Fail');

          this.isLoading = false;
        });
    }
  }

  makeTxData(): { senderAddress: string; recipientAddress: string; amount: any; memo: string; fee: any } {
    const senderAddress = this.accountKey?.bech32Address || '';

    const fee = {
      amount: [
        {
          denom: 'uaura',
          amount: '25',
        },
      ],
      gas: '500000',
    };

    const amount = [
      {
        denom: 'uaura',
        amount: `${+this.sendAmount * Math.pow(10, 6)}`,
      },
    ];

    const recipientAddress = this.recipientAddress;

    const memo = 'Send Tokens from station.aurad.dev';

    return {
      senderAddress,
      recipientAddress,
      amount,
      fee,
      memo,
    };
  }
}
