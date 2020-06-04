import React from 'react'
import TransactionTable from '../Homepage/Components/TransactionTable/TransactionTable'
import {getPendingTransaction, minePendingTransaction} from '../../Services/BlockchainService'

const PendingTransactions = () => {
    const PendingTransactions = getPendingTransaction()
    return (
        <div className="container">
            <h1>Pending Transactions</h1>

            <div className='container'>
                <TransactionTable transactions={PendingTransactions}/>
            </div>

            <button className="btn btn-primary" onClick={() => minePendingTransaction()}>Start mining</button>
        </div>
    )
}

export default PendingTransactions
