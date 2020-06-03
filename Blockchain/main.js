const BlockChain = require('./BlockChain');
const Transaction = require('./Transaction')
const EC = require("elliptic").ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('0430107397c8255e82b07c8db2d591c4e017c54bd9f64594e8983e912671651f2244ba8062a6c1267cf0d421d5a8bbb622d35ed4b06a2a635e5b4d21fc98151c2c')
const myWalletAddress = myKey.getPublic('hex');


let jindoCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
jindoCoin.addTransaction(tx1)

console.log('\n Starting the miner...');
jindoCoin.minePendingTransaction(myWalletAddress);

console.log('\n balance of me is ', jindoCoin.getBalanceOfAddress(myWalletAddress));
