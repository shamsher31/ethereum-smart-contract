const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get list of accounts
  accounts = await web3.eth.getAccounts();

  // use one of the account to deploy contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi Inbox']})
    .send({ from: accounts[0], gas: '1000000'})
})

describe('Inbox', () => {
  it('List of accounts', () => {
    console.log(inbox)
  })
})