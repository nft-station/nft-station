import { Injectable } from '@angular/core';
import { CosmWasmClient, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { from, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  contractAddress = 'aura19vu8aa8l5fd44yzqus86snkz5fkn8akymdq42azrdetzxkrn9jzs28zmvg';

  RPC = 'https://rpc.serenity.aura.network:443';
  LCD = 'https://lcd.serenity.aura.network:443';
  CHAIN_ID = 'serenity-testnet-001';

  client: CosmWasmClient;

  constructor() {
    SigningCosmWasmClient.connect(this.RPC).then(client => (this.client = client));
  }

  queryContractSmart(msg: Record<string, unknown>): Observable<any> {
    return from(this.client.queryContractSmart(this.contractAddress, msg));
  }
  execute() {}
}
