import React from 'react'
import Body from './Body'
import Footer from './Footer'
import './Player.css'
import Sidebar from './Sidebar'

const Player = () => {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body/>
                <Footer />
            </div>
        </div>
    )
}

export default Player
