import React from 'react'
import './Share.css'
import share from './Assets/ShareContent.png'

const Share = () => {
    const header = 'Share Content '
    const  msg = 'Whether it be a code you are stuck at, project issues you are facing, or even just an interesting picture or video you took, you can share it on the platforms for others to solve or admire.'

  return (
    <div className='sh-ContCont'>
        <div className='sh-container'>
        <div className='sh-text-container'>
            <h2 className='sh-header'>
            {header}
            </h2>
            <div className='sh-content'>
            <p>
            {msg}
            </p>
            </div>
        </div>
            <img src={share} className='sh-img'/>
        </div>
    </div>
  )
}

export default Share