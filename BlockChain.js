const Block = require('./Block')
const Transaction = require('./Transaction')

class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()]
        this.difficulty = 3;
        this.pendingTransaction = [];
        this.miningReward = 100;
    }

    createGenesisBlock(){
        return new Block("03/06/2020", "Genesis Block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    minePendingTransaction(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransaction);
        block.mineBlock(this.difficulty);

        console.log('Block successfully hashed');
        this.chain.push(block);

        this.pendingTransaction = [
            new Transaction(null, miningRewardAddress, this.miningReward);
        ];
    }

    createTransaction(transaction){
        this.pendingTransaction.push(transaction);
    }

    getBalanceOfAddress(address){
        
    }

    isChainValid(){
        for (let i = 1; i< this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

let jindoCoin = new BlockChain();

console.log("Mining block 1...")
jindoCoin.addBlock(new Block(1, "10/07/1998", {amount: 4}));

console.log("Mining block 1...")
jindoCoin.addBlock(new Block(2, "10/07/1999", {amount: 10}));

console.log(JSON.stringify(jindoCoin, null, 4));
