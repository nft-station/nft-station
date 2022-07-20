import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';
import { OwnerNFTDto } from '@app/core/models/common.model';
import { ContractService } from '@app/core/services/contract.service';
import { GToastrService } from '@app/core/services/toast.service';
import { WalletService } from '@app/core/services/wallet.service';
import { Key } from '@keplr-wallet/types';

export enum ETransferStatus {
  TRANSFERRING,
  SUCCESS,
  FAIL,
}
@Component({
  selector: 'app-nft-asset',
  templateUrl: './nft-asset.component.html',
  styleUrls: ['./nft-asset.component.scss'],
})
export class NFTAssetComponent implements OnInit {
  @Input() itemName: string;
  @Output() transferStatus = new EventEmitter<ETransferStatus>();

  btnColor = BTN_COLOR_GRADIENT;

  showModal = false;
  address = '';
  addressTransfer = '';
  invalidName = false;

  accountKey: Key | undefined;

  constructor(private contractService: ContractService, private toast: GToastrService, private w: WalletService) {}

  ngOnInit(): void {
    this.w.account$.subscribe({
      next: key => (this.accountKey = key),
    });
  }

  toggleModal(data: any) {
    this.address = '';
    this.showModal = !this.showModal;
  }

  checkWallet() {
    if (this.address.length > 0 && !(this.address.startsWith('aura') && this.address.length > 20)) {
      this.addressTransfer = '';
      this.contractService
        .queryContractSmart({
          address_of: {
            token_id: this.address,
          },
        })
        .subscribe({
          next: e => {
            let data = (e as OwnerNFTDto).owner;
            this.addressTransfer = data;
            this.invalidName = false;
          },
          error: e => {
            this.invalidName = true;
          },
          complete: () => {
            this.invalidName = false;
          },
        });
    } else {
    }
  }

  onSubmit() {
    if (this.accountKey?.bech32Address) {
      this.transferNFT();
    } else {
      this.toast.error('Please connect Your Wallet!');
    }
  }

  transferNFT() {
    const accountAddress = this.accountKey?.bech32Address;

    if (!accountAddress) return;

    const msg = {
      transfer_nft: {
        recipient: this.addressTransfer || this.address,
        token_id: this.itemName,
      },
    };
    this.transferStatus.emit(ETransferStatus.TRANSFERRING);

    this.contractService.execute(accountAddress, msg).subscribe({
      next: _ => {
        this.showModal = false;
        this.toast.success('Transfer Success');
        this.transferStatus.emit(ETransferStatus.SUCCESS);
      },
      error: err => {
        this.showModal = false;
        this.toast.error(err?.message || '', 'Transfer Fail');

        this.transferStatus.emit(ETransferStatus.FAIL);
      },
    });
  }
}
