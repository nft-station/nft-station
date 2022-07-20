import { Injectable } from '@angular/core';
import { Key } from '@keplr-wallet/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { CHAINS_INFO } from '../constants/chains.constant';
import { getKeplr } from '../utils/keplr';

export enum WALLET_PROVIDER {
  KEPLR = 'KEPLR',
  COIN98 = 'COIN98',
}

export const WALLET_INFO = 'WALLET_INFO';

export type WalletStorage = {
  provider: WALLET_PROVIDER;
  chainId: string;
};

@Injectable({
  providedIn: 'root',
})
export class WalletService {
  currentKey: any;
  chainId = 'serenity-testnet-001';
  chainInfo = CHAINS_INFO['serenity-testnet-001'];

  private accountSub = new BehaviorSubject<Key | undefined>(undefined);

  account$ = new Observable<Key | undefined>();

  get currentAccount() {
    return this.accountSub.value;
  }

  constructor() {
    this.currentKey = JSON.parse(localStorage.getItem(WALLET_INFO)!);

    this.account$ = this.accountSub.asObservable();
  }

  setWallet(nextState: Key): void {
    this.currentKey = nextState;

    this.accountSub.next(nextState);

    localStorage.setItem(WALLET_INFO, JSON.stringify(nextState));
  }

  public async connectKeplr(): Promise<void> {
    const checkWallet = async () => {
      try {
        const keplr = await getKeplr();

        if (keplr) {
          const account = await keplr
            .experimentalSuggestChain(this.chainInfo)
            .then(() => keplr.enable(this.chainId))
            .then(() => keplr.getKey(this.chainId));

          // await keplr.enable(this.chainId);

          // const account = await keplr.getKey(this.chainId);

          if (account) {
            this.setWallet(account);
            return;
          }

          throw new Error('Can not get account Info');
        } else {
          //   this.disconnect();
          window.open('https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en');
        }
      } catch (e: any) {}
    };
    checkWallet();
  }

  disconnect(): void {
    localStorage.removeItem(WALLET_INFO);

    this.accountSub.next(undefined);
  }
}
