import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transfer-nft',
  templateUrl: './transfer-nft.component.html',
  styleUrls: ['./transfer-nft.component.scss'],
})
export class TransferNFTComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
