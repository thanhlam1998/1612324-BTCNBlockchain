import React from 'react';
import './TransactionTable.scss'

const TransactionTable = (props) => {
  return (
    <div>
      {props.transactions.length === 0 ? (
        <p>This block has no transaction</p>
      ) : (
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Amount</th>
              <th scope="col">Timestamp</th>
              <th scope="col">Valid</th>
            </tr>
          </thead>
          <tbody>
            {props.transactions.map((tx, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td className="text-truncate address">{tx.fromAddress !== null ? tx.fromAddress : <span>System</span>}</td>
                <td className="text-truncate address">{tx.toAddress}</td>
                <td>{tx.amount} {tx.fromAddress === null && <span className="text-muted"><br/><small>(Block Reward)</small></span>}</td>
                <td>{tx.timestamp}</td>
                <td>
                    {tx.isValid() ? <span>✔</span> : <span>✘</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionTable;
