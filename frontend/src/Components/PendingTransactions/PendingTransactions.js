import React from 'react'
import TransactionTable from '../Homepage/Components/TransactionTable/TransactionTable'
import {getPendingTransaction, minePendingTransaction} from '../../Services/BlockchainService'
import { Redirect, useHistory } from 'react-router-dom'

const PendingTransactions = () => {
    const PendingTransactions = getPendingTransaction()
    const history = useHistory();

    const mining = () => {
        if (PendingTransactions.length > 0){
            minePendingTransaction();
            history.push('/');
        } else {
            alert("No pending transaction")
        }
    }
    return (
        <div className="container">
            <h1>Pending Transactions</h1>

            <div className='container'>
                <TransactionTable transactions={PendingTransactions}/>
            </div>

            <button className="btn btn-primary" onClick={() => mining()}>Start mining</button>
        </div>
    )
}

export default PendingTransactions
