import React from 'react'
import {getBlocks} from '../../Services/BlockchainService'

const SettingPage = () => {
    const blockchain = getBlocks();
    return (
        <div className="container">
            <h1>Settings</h1>
            <br/>

            <div className="form-group">
                <label>Difficulty</label>
                <input type="number" className="form-control" defaultValue={blockchain.difficulty} disabled></input>
            </div>

            <br/>

            <div className="form-group">
                <label>Mining reward</label>
                <input type="number" className="form-control" defaultValue={blockchain.miningReward} disabled></input>
            </div>
        </div>
    )
}

export default SettingPage
