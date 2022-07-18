import { Key } from '@keplr-wallet/types';
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

export class WalletService {
  currentAddress: any;

  constructor() {
    this.currentAddress = JSON.parse(localStorage.getItem(WALLET_INFO)!);
  }

  setWallet(nextState: Key): void {
    this.currentAddress = nextState;
    localStorage.setItem(WALLET_INFO, JSON.stringify(nextState));
  }

  public async connectKeplr(): Promise<void> {
    const checkWallet = async () => {
      try {
        const keplr = await getKeplr();

        if (keplr) {
          await keplr.enable('aura-devnet');
          const account = await keplr.getKey('aura-devnet');
          if (account) {
            this.setWallet(account);
          }
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
  }
}
