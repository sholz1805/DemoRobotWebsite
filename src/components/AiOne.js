import React from 'react'
import './Aione.css'
import robot4 from '../assets/images/robot4.jpg'

const AiOne = () => {
  return (
    <div className='outter'>
          <div className='inner'>
          <img height='651.75' width='714.2' src={robot4} alt="robot"/>
          <div className='nested'> 
            <h1>Artificial Intelligence Robots And The Future Of Work</h1>
            <p>The number of robots in the world today is approaching 1,000,000, with almost 
              half that number in Japan and just 15% in the US. A couple of decades ago, 90% 
              of robots were used in car manufacturing, typically on assembly lines doing a 
              variety of repetitive tasks. Today only 50% are in automobile plants, with the
              other half spread out among other factories, and many other industries.</p>
            <button>LEARN MORE</button>
          </div>
          </div>
        </div>
  )
}

export default AiOne