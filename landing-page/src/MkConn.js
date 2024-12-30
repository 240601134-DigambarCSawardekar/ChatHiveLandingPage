import React from 'react'
import stayC from './Assets/StayConnected.png'
import './MkConn.css'

const MkConn = () => {
  return (
    <div className='mc-cont-cont'>
        <div className='mc-container'>       
                <img src={stayC} className='mc-img'/>
                <div className='mc-text-container'>
            <h2 className='mc-header'>
            Make Connections
            </h2>
            <div className='mc-content'>
            <p>
            Meet like-minded individuals and stay connected by adding them to your connections. Get notified when someone in your connection makes a post to show your support or help them.
            </p>
            </div>
        </div>    
        </div>
    </div>
  )
}

export default MkConn