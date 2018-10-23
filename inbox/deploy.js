const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'industry video reject slice clutch egg egg confirm kick such bicycle shrimp',
  'https://rinkeby.infura.io/v3/d4830d0b49e147c7b508c865347b2422'
);

const web3 = new Web3(provider);

const deploy = async () => {
  console.log('Deploy in progress...');
  // Get list of accounts
  accounts = await web3.eth.getAccounts();
  console.log('Deploy from account', accounts[0]);
  // use one of the account to deploy contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi Inbox']})
    .send({ from: accounts[0], gas: '1000000'});

  console.log('Deployed contract address', inbox.options.address)
  inbox.setProvider(provider)
};

deploy();
