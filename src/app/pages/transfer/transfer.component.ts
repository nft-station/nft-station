import { Component, OnInit } from '@angular/core';
import { TypeAssets } from '@app/core/constants/assets.enum';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})

/**
 * Footer Component
 */
export class TransferComponent implements OnInit {
  amountFormat: any;
  typeAssets = TypeAssets;
  typeCurrent = this.typeAssets.NFT;

  constructor() {}

  ngOnInit(): void {}

  changeTab(tabId: TypeAssets): void {
    this.typeCurrent = tabId;
  }
}
