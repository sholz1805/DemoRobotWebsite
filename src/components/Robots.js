import React from 'react'
import './Robots.css'
import man from '../assets/images/man.jpg'
import small from '../assets/images/small.jpg'

const Robots = () => {
  return (
   <>
   
   <div className='the-robots'>
          <div className='ces'>
           <div className='cesInner'>
            <h1>The robots of CES 2019</h1>
           </div> 
          <img height='280' width='384'src={small} alt="small"/>
          </div>
          <div>
          <img height='540' width='384'src={man} alt="man"/>
          </div>
          <div className='third'>
            <p>
            Hitting the show floor at CES can be something of a challenge. 
            There are so many choices, it’s almost impossible to figure out where to even start. 
            So this year, I got to narrow my focus to just one area — robotics — 
            and it made my job a lot easier. Or it should have. Turns out, 
            there are so many choices in the field of robotics, I was back where I started.
            </p>
          </div>
        </div>
        <button className='btn1'>LEARN MORE</button>
   </>
  )
}

export default Robots