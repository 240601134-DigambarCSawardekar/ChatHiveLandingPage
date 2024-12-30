import React from 'react'
import './DiscBoard.css'
import discboard from './Assets/DiscBoard.png'

const DiscBoard = () => {
  return (
    <div className='db-ContCont'>
        <div className='db-container'>
        <div className='db-text-container'>
            <h2 className='db-header'>
            Discussion Board
            </h2>
            <div className='db-content'>
            <p>
            Have any issues? Just fire up a post or search on the discussion board to get assistance from people on the platform who have faced the same issue and get insightful guidance.
            </p>
            </div>
        </div>
            <img src={discboard} className='db-img'/>
        </div>
    </div>
  )
}

export default DiscBoard