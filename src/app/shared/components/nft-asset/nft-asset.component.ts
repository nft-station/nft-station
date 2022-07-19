import { Component, Input } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';
import { OwnerNFTDto } from '@app/core/models/common.model';
import { ContractService } from '@app/core/services/contract.service';
import { GToastrService } from '@app/core/services/toast.service';
import { Keplr } from '@keplr-wallet/types';
import { from, mergeMap } from 'rxjs';
@Component({
  selector: 'app-nft-asset',
  templateUrl: './nft-asset.component.html',
  styleUrls: ['./nft-asset.component.scss'],
})
export class NFTAssetComponent {
  @Input() itemNFT: any;
  btnColor = BTN_COLOR_GRADIENT;
  modalReference: any;
  showModal = false;
  currentData: any;
  suffixes = '.aura';
  address = '';
  addressTransfer = '';
  invalidName = false;
  constructor(private contractService: ContractService, private toast: GToastrService) {}

  toggleModal(data: any) {
    this.currentData = data;
    this.address = '';
    this.showModal = !this.showModal;
  }

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
            let data = (e as OwnerNFTDto).owner;
            this.addressTransfer = data;
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

  transferNFT() {
    if ((window as any).keplr) {
      const keplr: Keplr = (window as any).keplr;
      const CHAIN_ID = 'serenity-testnet-001';
      from(
        keplr
          .enable(CHAIN_ID)
          .then(_ => keplr.getKey(CHAIN_ID))
          .then(account => account?.bech32Address)
      )
        .pipe(
          mergeMap(currentAddress => {
            const msg = {
              transfer_nft: {
                recipient: this.addressTransfer || this.address,
                token_id: this.currentData,
              },
            };
            return this.contractService.execute(currentAddress, msg);
          })
        )
        .subscribe({
          next: res => {
            this.showModal = false;
            this.toast.success('Transfer Success');
          },
          error: err => {
            this.showModal = false;
            this.toast.error(err?.message || '', 'Transfer Fail');
          },
        });
    }
  }
}
