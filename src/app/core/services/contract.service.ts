import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

import { CosmWasmClient, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  CONTRACT = 'aura19vu8aa8l5fd44yzqus86snkz5fkn8akymdq42azrdetzxkrn9jzs28zmvg';

  RPC = 'https://rpc.serenity.aura.network:443';
  LCD = 'https://lcd.serenity.aura.network:443';
  CHAIN_ID = 'serenity-testnet-001';

  client: CosmWasmClient;

  private _signer: SigningCosmWasmClient;
  balance = 0;

  constructor() {
    this.connectClient();

    this.getSigner().then(signer => {
      return SigningCosmWasmClient.connectWithSigner(this.RPC, signer).then(e => {
        this._signer = e;
      });
    });
  }

  connectClient() {
    return SigningCosmWasmClient.connect(this.RPC).then(client => (this.client = client));
  }

  queryContractSmart(msg: Record<string, unknown>): Observable<unknown> {
    if (this.client) {
      return from(this.client.queryContractSmart(this.CONTRACT, msg));
    }

    return from(this.connectClient().then(_ => this.client.queryContractSmart(this.CONTRACT, msg)));
  }

  get signer(): SigningCosmWasmClient | undefined {
    if (this._signer) {
      return this._signer;
    }

    return undefined;
  }

  execute(userAddress: string, msg: Record<string, unknown>): Observable<any> {
    if (this.signer && msg) {
      const fee = {
        amount: [
          {
            denom: 'uaura',
            amount: '1',
          },
        ],
        gas: '500000',
      };
      return from(this.signer.execute(userAddress, this.CONTRACT, msg, fee));
    }

    return of(null);
  }

  private async getSigner() {
    return (window as any).getOfflineSigner(this.CHAIN_ID);
  }

  getBalance(userAddress: any, denom = '') {
    return this.client.getBalance(userAddress, denom).then(data => {
      this.balance = Number(data?.amount) || 0;

      return Number(data?.amount) || 0;
    });
  }
}
