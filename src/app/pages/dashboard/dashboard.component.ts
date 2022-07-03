import { Component, OnInit } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';
import { TableTemplate } from '@app/core/models/common.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cardData = [
    {
      title: 'Bored Ape Yacht Club',
      image: 'assets/nft1.png',
      price: 818,
    },
    {
      title: 'CryptoPunks',
      image: 'assets/nft5.png',
      price: 1300,
    },
    {
      title: 'The Sandbox',
      image: 'assets/nft8.jpg',
      price: 1500,
    },
    {
      title: 'goblinTown',
      image: 'assets/nft7.png',
      price: 3500,
    },
  ];

  transactionList = [
    {
      time: 'Today',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'NFT',
      price: '100'
    },
    {
      time: 'Today',
      name: 'The Sandbox',
      payment: 'Cash',
      type: 'NFT',
      price: '50'
    },
    {
      time: 'Today',
      name: 'goblinTown',
      payment: 'Cash',
      type: 'Token',
      price: '10'
    },
    {
      time: 'Today',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'Token',
      price: '30'
    },
    {
      time: 'Today',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'NFT',
      price: '100'
    },
    {
      time: 'Today',
      name: 'The Sandbox',
      payment: 'Cash',
      type: 'NFT',
      price: '50'
    },
    {
      time: 'Today',
      name: 'goblinTown',
      payment: 'Cash',
      type: 'Token',
      price: '10'
    },
    {
      time: 'Today',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'Token',
      price: '30'
    }
  ];
  templates: Array<TableTemplate> = [
    { matColumnDef: 'time', headerCellDef: 'Time' },
    { matColumnDef: 'name', headerCellDef: 'Name' },
    { matColumnDef: 'payment', headerCellDef: 'Payment' },
    { matColumnDef: 'type', headerCellDef: 'Type' },
    { matColumnDef: 'price', headerCellDef: 'Price' },
  ];
  
  btnColor = BTN_COLOR_GRADIENT;
  constructor() {}

  ngOnInit(): void {}
}
