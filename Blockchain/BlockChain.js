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
        const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransaction.push(rewardTx);

        let block = new Block(Date.now(), this.pendingTransaction);
        block.mineBlock(this.difficulty);

        console.log('Block successfully hashed');
        this.chain.push(block);

        this.pendingTransaction = [];
    }

    addTransaction(transaction){
        if(!transaction.fromAddress || !transaction.toAddress){
            throw new Error("Transaction must include from and to address")
        }

        if(!transaction.isValid()){
            throw new Error("Cannot add invalid transaction to chain");
        }

        this.pendingTransaction.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address){
                    balance -= trans.amount;
                }

                if(trans.toAddress === address){
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    isChainValid(){
        for (let i = 1; i< this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(!currentBlock.hasValidTransaction()){
                return false;
            }

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

module.exports = BlockChain;