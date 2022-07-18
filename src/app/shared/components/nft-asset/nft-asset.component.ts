import { Component, Input } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';

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
  toggleModal(data: any) {
    this.currentData = data;
    this.showModal = !this.showModal;
  }

  transferNFT() {
    
  }
}
