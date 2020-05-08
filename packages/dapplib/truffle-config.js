require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note ranch come install father food genius'; 
let testAccounts = [
"0x23dbd5ba0304e304ec20b27d4e9c5280fb2aaaf9faf06c0d08964f1a3bfdf6a4",
"0xcf489f7117aefd4402bf3abb9ece6e34adecb0114cdabad68603fb459da4b034",
"0xd3ecce8d53c72580d7146c81dae4c6e2bb4f57f1dd7e992d9c395e234251dce5",
"0x4ec1e0ac2f64dd98f2214423f0881fb3de3c2ee10362cd15bb8175f79e3811b3",
"0xd97c59532892646090b746215f7b8e1c1aa04a31db3dbf07303f9ec41f4802ab",
"0x3474f826499fa12c5c008ff69108a5390798718570a965b47dee0c4c36e75f46",
"0xb2f573f7997b1d074d16149a38e4b4f3033a90eb617128abf5e6e24de58618c4",
"0xed115d11577beeaf6376c1364d31fa4714a955f22828c4f4cc99b5e5badfd7ad",
"0xcbac14c6ac5f199f471e522bd38879bd30e184a9d3eb81d8ef2e759d521d998f",
"0x8da60fc642403bad1c35ff30c16b452ce1027120ea8f48db8c958e108524cb96"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
