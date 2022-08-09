/* eslint-disable no-var */
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min';

let web3;
var provider = new WalletConnectProvider({
  rpc: {
    56: 'https://bsc-dataseed1.ninicoin.io',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    // ...
  },
  // bridge: 'https://bridge.walletconnect.org',
});

export const DisconnectWallet = async () => {
  await provider.disconnect();
  web3 = null;
};
