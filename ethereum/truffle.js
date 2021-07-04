const HDWalletProvider = require("@truffle/hdwallet-provider");
const gasPrice = 1000000000; //process.env.GASPRICE;
let privateKeys =
["90f8e2e2fe4473f2859d00da9936fd739b070cd59165b1f9cf1e9aa96fe57a31", "4491f334d01602aabaa8a0203418c79e8de2cec62e983212cb8ae6df8c44f49a"];
const network = "http://bops.morpheuslabs.io:21523";
const chainId = 660;
module.exports = {
  compilers: {
    solc: {
      //version: "0.5.8",
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        //evmVersion: 'petersburg'
      },
    },
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    // network for unit testing
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*"
    },
    private_poa: {
      provider: function () {
        return new HDWalletProvider(
          {
            privateKeys: privateKeys,
            providerOrUrl: network,
            chainId: chainId
          }
        )
      },
      network_id: "*",
      gas: 6000000,
      gasPrice: gasPrice
    }
  }
};
