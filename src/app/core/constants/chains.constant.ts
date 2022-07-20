import { ChainInfo } from '@keplr-wallet/types';

export const CHAINS_INFO: { [chainId: string]: ChainInfo } = {
  ['serenity-testnet-001']: {
    chainId: 'serenity-testnet-001',
    chainName: 'Aura Serenity TestNet',
    rpc: 'https://rpc.serenity.aura.network',
    rest: 'https://lcd.serenity.aura.network',
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: 'aura',
      bech32PrefixAccPub: 'aura' + 'pub',
      bech32PrefixValAddr: 'aura' + 'valoper',
      bech32PrefixValPub: 'aura' + 'valoperpub',
      bech32PrefixConsAddr: 'aura' + 'valcons',
      bech32PrefixConsPub: 'aura' + 'valconspub',
    },
    currencies: [
      {
        coinDenom: 'AURA',
        coinMinimalDenom: 'uaura',
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'AURA',
        coinMinimalDenom: 'uaura',
        coinDecimals: 6,
      },
    ],
    stakeCurrency: {
      coinDenom: 'AURA',
      coinMinimalDenom: 'uaura',
      coinDecimals: 6,
    },
    coinType: 118,
    gasPriceStep: {
      low: 0.001,
      average: 0.0025,
      high: 0.004,
    },
    features: [],
    walletUrlForStaking: 'https://serenity.aurascan.io/validators',
  },
};
