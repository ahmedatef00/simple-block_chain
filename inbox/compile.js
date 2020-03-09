const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
const CONTRACT_FILE = 'Inbox.sol';

const input = {
  language: 'Solidity',
  sources: {
    [CONTRACT_FILE]: {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', "evm.bytecode"]
      }
    }
  }
}

const compiled = solc.compile(JSON.stringify(input));
const output = JSON.parse(compiled);
//const abi = output.contracts[CONTRACT_FILE]['Inbox'].abi;
//const bytecode = output.contracts[CONTRACT_FILE]['Inbox'].evm.bytecode.object;

module.exports = output.contracts[CONTRACT_FILE]['Inbox'];

