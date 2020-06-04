import React from 'react'
import BlockchainViewerCard from '../BlockchainViewerCard/BlockchainViewerCard'

const BlockchainViewer = (props) => {
    return (
        <div className ="container mt-3">
            <h1>Blocks on chain</h1>
            <p>Each card represents a block on the chain. Click on the block to see the transaction store inside</p>
            {props.blocks.map( (block, index) => (
                <BlockchainViewerCard key={index} block={block} onClick={() => props.setSelectedBlock(block)}/>
            ))}
        </div>
    )
}

export default BlockchainViewer
