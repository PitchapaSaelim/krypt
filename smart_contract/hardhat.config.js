// https://eth-ropsten.alchemyapi.io/v2/xPFF85twBdrPWOZrSt-aDrEAfP-ayu1N

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/xPFF85twBdrPWOZrSt-aDrEAfP-ayu1N',
      accounts: ['2d8a205b2cc4172683bcb2cfcbfc3d542f7081215e36cbfba656284ffe1f9c23'],
    },
  },
};