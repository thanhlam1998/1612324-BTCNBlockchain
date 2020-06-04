import React from 'react'
import './BlockchainViewerCard.scss'

const BlockchainViewerCard = (props) => {
        const hashColor={
            color: `#${props.block.hash.substring(0,6)}`
        }
        const previousHashColor = {
            color: `#${props.block.previousHash.substring(0,6)}`
        }
    return (
        <div className="card mr-4" onClick={() => props.onClick()}>
            <div className="card-header text-center">
                {props.block.previousHash === "0" ? <h4 className="card-title">Block <small className="text-muted">(Genesis block)</small></h4>
                : <h4 className="card-title">Block</h4>}
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span>Hash</span>
                    <br/>
                    <div className="text-truncate" style={hashColor}>
                        <small>{props.block.hash}</small>
                    </div>
                    <br/>
                    <span>Hash of previous block</span>
                    <br/>
                    <div className="text-truncate" style={previousHashColor}>
                        <small>{props.block.previousHash}</small>
                    </div>
                </li>
                <li className="list-group-item">
                <span>Nonce</span>
                    <br/>
                    <div className="text-truncate text-muted">
                        <small>{props.block.nonce}</small>
                    </div>
                </li>
                <li className="list-group-item">
                <span>Timestamp</span>
                    <br/>
                    <div className="text-truncate text-muted">
                        <small>{props.block.timestamp}</small>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default BlockchainViewerCard
