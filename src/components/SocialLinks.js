import React from 'react'
import './SocialLinks.css'
import facebook from '../assets/images/facebook-svgrepo-com.svg'
import ig from '../assets/images/instagram-svgrepo-com.svg'
import twitter from '../assets/images/twitter-svgrepo-com.svg'
import linkedin from '../assets/images/linkedin-svgrepo-com.svg'

const SocialLinks = () => {
  return (
    <>
    <div className='social'>
            <p>Sample text. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit <br/> nullam nunc justo sagittis suscipit ultrices.</p>
            <div className='social-icons'>
            <img width= '20' height='20' src = {facebook} alt="facebook"/>
            <img width= '20' height='20' src = {twitter} alt="twitter"/>
            <img width= '20' height='20' src = {ig} alt="instagram"/>
            <img width= '20' height='20' src = {linkedin} alt="linkedin"/>
            </div>  
        </div>
        <div className='footer'>
            <p>Website Templates created with Website Builder Software.</p>
        </div>
    </>
  )
}

export default SocialLinks