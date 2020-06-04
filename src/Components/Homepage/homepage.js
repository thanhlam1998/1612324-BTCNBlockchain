import React, { useState, useEffect } from 'react'

import BlockchainViewer from './Components/BlockchainViewer/BlockchainViewer'
import {getBlocks} from '../../Services/BlockchainService'
import TransactionTable from './Components/TransactionTable/TransactionTable'


const Homepage = (props) => {

    const blocks = getBlocks();
    console.log(blocks);
    const [selectedBlock, setSelectedBlock] = useState(blocks.chain[0]);

    return (
        <div className="homepage">
            <BlockchainViewer blocks ={blocks.chain} setSelectedBlock = {setSelectedBlock}/>

            <br/><br/>

            <div className="container mt-3">
                <h1>Transaction inside block</h1>
                <TransactionTable transactions={selectedBlock.transactions}/>
            </div>
        </div>
    )
}

export default Homepage
