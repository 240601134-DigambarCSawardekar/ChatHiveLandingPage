import React from 'react'
import './About.css'
import community from './Assets/Community.png'

const About = () => {
    const header = 'Imagine a Place...'
    const  msg = '...where you can connect with your Mentors and Friends around you, Share your Experience’s at CDAC Hyderabad, Collab on Projects or Events that Interest you, Even get guidance from your Alumni’s.'
  return (
    <div>
        <div className='about'>
            <h1 className='abt-heading'>{header}</h1>
            <div className='abt-content-container'>
                <p className='abt-content'>{msg}</p>
            </div>
            <div className='abt-img-container'>
                <img src={community} alt='' className='community'/>
            </div>
        </div>
    </div>
    )
}

export default About