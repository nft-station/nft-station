import { Component } from '@angular/core';
import { ContractService } from '@app/core/services/contract.service';
import { CosmWasmClient, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';

@Component({
  selector: 'app-transfer-nft',
  templateUrl: './transfer-nft.component.html',
  styleUrls: ['./transfer-nft.component.scss'],
})
export class TransferNFTComponent {
  cardData = [
    {
      title: 'Bored Ape Yacht Club',
      image: 'assets/nft1.png',
      price: 818,
    },
    {
      title: 'CryptoPunks',
      image: 'assets/nft2.png',
      price: 1300,
    },
    {
      title: 'The Sandbox',
      image: 'assets/nft8.jpg',
      price: 1500,
    },
    {
      title: 'goblinTown',
      image: 'assets/nft3.png',
      price: 3500,
    },
    {
      title: 'The Possessed',
      image: 'assets/nft4.png',
      price: 3500,
    },
    {
      title: 'Doodles',
      image: 'assets/nft5.png',
      price: 3500,
    },
    {
      title: 'Azuki',
      image: 'assets/nft6.png',
      price: 3500,
    },
  ];
  isLoading = false;
  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    let queryData = {
      tokens: { owner: 'aura103d2neftkpce223utyz9sc55a8x8ktl44ue9v2' },
    };
    this.getAccountInfo(queryData);
  }

  async getAccountInfo(queryData: any) {
    this.isLoading = true;
    const client = await SigningCosmWasmClient.connect(this.contractService.RPC);
    try {
      const config = await client.queryContractSmart(this.contractService.contractAddress, queryData);
      console.log(config);
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
    }
  }
}
