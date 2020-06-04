import React, { useState } from 'react'
import {walletKeys, addTransaction}  from '../../Services/BlockchainService'
import Transaction from '../../Blockchain/Transaction'

const CreateTransaction = (props) => {
    const walletKey = walletKeys[0];
    var newTx = new Transaction();
    const [toAddress, setToAddress] = useState();
    const [amount, setAmount] = useState();

    const createNewTransaction =() => {
        newTx.fromAddress = walletKey.publicKey;
        newTx.toAddress = toAddress;
        newTx.amount = amount;
        newTx.signTransaction(walletKey.keyObj);
        addTransaction(newTx);
        setToAddress('');
        setAmount('');
        newTx = new Transaction();   
    }
    return (
        <div className="container">
            <h1>Create transaction</h1>
            <p>Transfer money by wallet's address</p>

            <br/>

            <div className="form-group">
                <label>From address</label>
                <input type="text" className="form-control" value={walletKey.publicKey} disabled></input>
            </div>

            <div className="form-group">
                <label>To address</label>
                <input type="text" className="form-control" value={toAddress} onChange={e => setToAddress(e.target.value)}></input>
            </div>

            <div className="form-group">
                <label name="amount">Amount</label>
                <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)}></input>
            </div>

            <button className="btn btn-primary" onClick={() => createNewTransaction()}>Sign &amp; Create Transaction</button>
        </div>
    )
}

export default CreateTransaction
