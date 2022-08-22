import React from 'react'
import './TechTrend.css'
import robot1 from '../assets/images/robot1.jpg'
import robot2 from '../assets/images/robot2.jpg'
import robot3 from '../assets/images/robot3.jpg'

const TechTrend = () => {
  return (
    <>
    <div className='tech-trend'>
          <h1>Technology Trends</h1>
          <p>Maximum flexibility in production. Relief of employees by performing 
            ergonomically <br/>unfavorable work steps that could not previously be automated</p>
        </div>
        <div className='the-robotsB'>
          <div>
          <img height='540' width='384'src={robot1} alt="robot"/>
          </div>
          <div>
          <img height='540' width='384'src={robot2} alt="robot"/>
          </div>
          <img height='540' width='384'src={robot3} alt="robot"/>
        </div>
    </>
  )
}

export default TechTrend