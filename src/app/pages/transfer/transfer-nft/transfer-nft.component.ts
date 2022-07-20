import { Component, OnInit } from '@angular/core';
import { ContractService } from '@app/core/services/contract.service';
import { WalletService } from '@app/core/services/wallet.service';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';

@Component({
  selector: 'app-transfer-nft',
  templateUrl: './transfer-nft.component.html',
  styleUrls: ['./transfer-nft.component.scss'],
})
export class TransferNFTComponent implements OnInit {
  cardData = [];
  isLoading = false;
  constructor(private contractService: ContractService, private walletService: WalletService) {}

  ngOnInit(): void {
    this.loadTokens();
  }

  loadTokens() {
    this.isLoading = true;
    this.contractService
      .queryContractSmart({
        tokens: {
          owner: this.walletService?.currentKey?.bech32Address,
        },
      })
      .subscribe({
        next: response => {
          this.cardData = (response as any).tokens;
          this.isLoading = false;
        },
        error: err => {
          console.log('response', err);
          this.isLoading = false;
        },
      });
  }
}
