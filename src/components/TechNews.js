import React from 'react'
import './TechNews.css'
import hand from '../assets/images/hand.jpg'

const TechNews = () => {
  return (
    <div className='tech-news'>
                  <div>
                    <p className='p1'>TECHNOLOGY NEWS</p>
                    <h2>Human-robot</h2>
                    <p className='p2'>In human-robot collaboration, the robot assists the human operator. 
                      This means: The machine does not replace the human, 
                      but complements his capabilities and relieves him of arduous tasks. 
                      These can include overhead work, for example, or the lifting of heavy loads. 
                      Autonomous, collaborative robots are also used to supply production workstations</p>
                  </div>
                  <div>
                  <img height='400px' width='600px' src={hand} alt="hand"/>
                  </div>
        </div>
  )
}

export default TechNews