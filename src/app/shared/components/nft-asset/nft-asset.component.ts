import {Component, Input, OnInit} from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';

@Component({
  selector: 'app-nft-asset',
  templateUrl: './nft-asset.component.html',
  styleUrls: ['./nft-asset.component.scss']
})
export class NFTAssetComponent implements OnInit {
  @Input() itemNFT: any;
  btnColor = BTN_COLOR_GRADIENT;

  constructor() { }

  ngOnInit(): void {
  }
}
