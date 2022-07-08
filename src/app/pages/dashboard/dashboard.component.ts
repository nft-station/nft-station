import { Component } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';
import { TableTemplate } from '@app/core/models/common.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
      timestamp: '2022-05-20T03:44:57.000Z',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'NFT',
      price: '1005',
    },
    {
      timestamp: '2022-05-12T03:44:57.000Z',
      name: 'The Sandbox',
      payment: 'Cash',
      type: 'NFT',
      price: '4450',
    },
    {
      timestamp: '2022-05-25T03:44:57.000Z',
      name: 'goblinTown',
      payment: 'Cash',
      type: 'Token',
      price: '12230',
    },
    {
      timestamp: '2022-06-05T03:44:57.000Z',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'Token',
      price: '3230',
    },
    {
      timestamp: '2022-06-16T03:44:57.000Z',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'NFT',
      price: '1020',
    },
    {
      timestamp: '2022-05-21T03:44:57.000Z',
      name: 'The Sandbox',
      payment: 'Cash',
      type: 'NFT',
      price: '50',
    },
    {
      timestamp: '2022-06-11T03:44:57.000Z',
      name: 'goblinTown',
      payment: 'Cash',
      type: 'Token',
      price: '10',
    },
    {
      timestamp: '2022-06-19T03:44:57.000Z',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'Token',
      price: '30',
    },
    {
      timestamp: '2022-07-02T03:44:57.000Z',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'Token',
      price: '30',
    },
    {
      timestamp: '2022-07-03T03:44:57.000Z',
      name: 'CryptoPunks',
      payment: 'Cash',
      type: 'Token',
      price: '30',
    },
    {
      timestamp: '2022-07-04T03:44:57.000Z',
      name: 'The Sandbox',
      payment: 'Cash',
      type: 'Token',
      price: '30',
    },
  ];
  templates: Array<TableTemplate> = [
    { matColumnDef: 'timestamp', headerCellDef: 'Time' },
    { matColumnDef: 'name', headerCellDef: 'Name' },
    { matColumnDef: 'payment', headerCellDef: 'Payment' },
    { matColumnDef: 'type', headerCellDef: 'Type' },
    { matColumnDef: 'price', headerCellDef: 'Price' },
  ];

  btnColor = BTN_COLOR_GRADIENT;
}
