require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note spice proof hunt brave equal gather'; 
let testAccounts = [
"0x8734043ce323d812c1d5289a88ec2f111e4d61b4a2e12e69508576ce443e92f4",
"0xfff440ca1e4627423f0cf38909ce8506cacf19870ffecc9e450726ca5123684a",
"0x90b0cd7852bbbee27a8a07ef00fc4106936f6d25595c8a31c28e7e66dac58043",
"0x5d9354d2854f29ea5f6545dc3e541a63dccf844aa50d45f9cdd5b183fb9d9896",
"0xa3957dfe137e95e61d21624435cea282655b55c4425d2a1e35e1fc283f23d1de",
"0x496e69846308787dbdc8be1b8e198da5d5fbe6ab2eb7316e08f504e8b667c0af",
"0xfd1c1f2965c751818733d5deddb4e49d6631d8d242dcb17460b60d2b81850ccf",
"0xc5b85779e17973888684108281727d79124120fe36242c78e5050ced012409ed",
"0x08e5440e75df9157204f412677757b1c464fe16b02667945a60803879e8fbd84",
"0x3c5072455b735a47dd3c6a64460646a50b50acf230a3f4b59e7cd23fecd47776"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


