import React from 'react'
import './Rei.css'
import robotization from '../assets/images/robot-svgrepo-com.svg'
import engineering from '../assets/images/engineer-worker-svgrepo-com.svg'
import industry from '../assets/images/industry-svgrepo-com.svg'

const Rei = () => {
  return (
    <div className='rei'>
    <div>
        <img className='three' src = {robotization} alt="robot"/>
        <p className='heading'>Robotization</p>
        <p className='info'>When the first industrial revolution 
          hit ipsum dolor sit amet, consectetur adipiscing elit nullam 
          nunc justo sagittis suscipit ultrices.</p>
    </div>
    <div>
        <img className='three' src = {engineering} alt="engineer"/>
        <p className='heading'>Engineering</p>
        <p className='info'>When the first industrial revolution 
          hit ipsum dolor sit amet, consectetur adipiscing elit nullam 
          nunc justo sagittis suscipit ultrices.</p>
    </div>
    <div>
        <img className='three' src = {industry} alt="industry"/>
        <p className='heading'>Industry</p>
        <p className='info'> When the first industrial revolution 
          hit ipsum dolor sit amet, consectetur adipiscing elit nullam 
          nunc justo sagittis suscipit ultrices.</p>
    </div>
  </div>
    
  )
}

export default Rei