import React from 'react'
import './AiTwo.css'
import ai from '../assets/images/ai.jpg'

const AiTwo = () => {
  return (
     
    <div className='ai'>
    <div className='ai-inner'>
    <img height='651.75' width='600' src={ai} alt="robot"/>
    <div className='ai-nested'> 
      <h5>AI PERSPECTIVES</h5>
      <h1>Robots and AI</h1>
      <p>How many want to subject themselves to black lung disease and a host of other health 
        problems from that job? This is why coal mining towns are dying out. Young people in 
        these towns are moving on to the brighter job prospects. 
        And technology is taking over what’s left of the mining industry. 
        Green energy is taking over, and with it, a host of new, clean jobs and careers. 
        It’s the march of civilization that will never cease</p>
      <button>LEARN MORE</button>
    </div>
    </div>
  </div>
  )
}

export default AiTwo