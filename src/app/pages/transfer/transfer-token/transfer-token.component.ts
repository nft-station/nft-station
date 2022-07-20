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
  numberConvert = Math.pow(10, 6);
  isLoading = false;
  isValidForm = false;
  sendAmount = '';
  isExceedAmount = false;

  constructor(
    private contractService: ContractService,
    private walletService: WalletService,
    private toast: GToastrService
  ) {}

  ngOnInit(): void {
    this.walletService.account$.subscribe({
      next: key => (this.accountKey = key),
    });
    this.contractService.getBalance(this.accountKey?.bech32Address, 'uaura');
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
            this.isValidForm = false;
          },
          complete: () => {
            this.invalidName = false;
            this.checkFromValid();
          },
        });
    }
  }

  transferToken() {
    if (!this.accountKey?.bech32Address) {
      return;
    }
    if (Number(this.sendAmount) > this.contractService.balance / this.numberConvert) {
      this.isExceedAmount = true;
      this.isValidForm = false;
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
          this.contractService.getBalance(this.accountKey?.bech32Address, 'uaura');
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

  checkAmountChange(s: any) {
    this.isExceedAmount = false;
    this.checkFromValid();
  }

  getMaxToken(): void {
    this.isExceedAmount = false;
    let amountCheck = (
      (Number(this.contractService.balance) -
        Number(500000) * Number(this.walletService?.chainInfo?.gasPriceStep?.high)) /
      this.numberConvert
    ).toFixed(3);
    if (Number(amountCheck) < 0) {
      this.isExceedAmount = true;
    }
    this.sendAmount = amountCheck;
    this.checkFromValid();
  }

  checkFromValid() {
    if (this.invalidName || this.isExceedAmount || !(Number(this.sendAmount) > 0 && this.recipientAddress?.length > 0)) {
      this.isValidForm = false;
    } else {
      this.isValidForm = true;
    }
  }
}
