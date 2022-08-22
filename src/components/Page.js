import React from 'react'
import './page.css'
import {FaBars, FaTimes} from 'react-icons/fa'
// import searchIcon from '../assets/images/search.svg'
import robot from '../assets/images/robot.png'
import { FaSearch } from "react-icons/fa";


const Page = () => {
  return (
        <div>
            <div className='start'>
            </div>
            <div className='starter'>
                <div className='searchbar'>
                <FaSearch className='icon'/>
                <input className='search'placeholder='Search'></input>
                </div>
            </div>
            <FaBars className='fabar'/>     
            <div className='robots'>
                  <img className='robot_img' src={robot} alt="robot" />
                  <div className='fonts'>
                  <h1>
                    Robots Are
                    The Future
                  </h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    <br/>elit nullam nunc justo sagittis suscipit ultrices.</p>
                  </div>
            </div> 
        </div> 
  )
}

export default Page