import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';
import { WALLET_INFO, WalletService } from '@app/core/services/wallet.service';

@Component({
  selector: 'app-header-authentication',
  templateUrl: './header-authentication.component.html',
  styleUrls: ['./header-authentication.component.scss'],
})
export class HeaderAuthenticationComponent implements OnInit {
  user: any = null;
  userAddress = '';
  btnColor = BTN_COLOR_GRADIENT;
  currentAddress: any;
  constructor(private walletService: WalletService, private router: Router) {}

  ngOnInit(): void {
    this.currentAddress = JSON.parse(localStorage.getItem(WALLET_INFO)!);
  }

  connectWallet(): void {
    this.walletService.connectKeplr();
    setTimeout(() => {
      this.currentAddress = JSON.parse(localStorage.getItem(WALLET_INFO)!);
    }, 500);
  }

  disconnect(): void {
    this.walletService.disconnect();
    this.currentAddress = '';

    this.router.navigate(['/']);
  }
}
