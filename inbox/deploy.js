const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiled = require('./compile');
const abi = compiled.abi;
const bytecode = compiled.evm.bytecode.object;

const provider = new HDWalletProvider('favorite island pig desert address hat execute exile female tongue nothing cabin',
  'https://rinkeby.infura.io/v3/84d4c29acf81421d9122f22787803602'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  try {
    const result = await new web3.eth.Contract(abi)
      .deploy({ data: '0x' + bytecode, arguments: ["Hi there!"] })
      .send({ from: accounts[0], gas: '1000000'});
    
    console.log('Contract deployed to: ', result.options.address);
  } catch(err) {
    console.log(err);
  }
};

deploy();