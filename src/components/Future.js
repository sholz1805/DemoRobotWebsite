import React from 'react'
import './Future.css'
import robotbox1 from '../assets/images/robotbox1.jpg'
import robotbox2 from '../assets/images/robotbox2.jpg'
import robotbox3 from '../assets/images/robotbox3.jpg'
import robotbox4 from '../assets/images/robotbox4.jpg'
import robotbox5 from '../assets/images/robotbox5.jpg'

const Future = () => {
  return (
    <>
    <div className='future'>
    <div className='leftbox'>
        <p>FUTURE OF WORK</p>
        <em>While much of the discourse around AI and automation has been concerned with the looming threat to the workforce...</em>
    </div>
    <div className='rightbox'>

    </div>   
    </div>
    <div className='img1'>
    <img className='media' width='194' height='185' src={robotbox3} alt="robot"/>
    <img className='media' width='194' height='185' src={robotbox2} alt="robot"/> 
    <img className='media' width='194' height='185' src={robotbox3} alt="robot"/> 
    <img className='media' width='194' height='185' src={robotbox1} alt="robot"/> 
    <img className='media' width='194' height='185' src={robotbox4} alt="robot"/> 
    <img className='media' width='194' height='185' src={robotbox5} alt="robot"/> 
    </div>
    </>

  )
}

export default Future