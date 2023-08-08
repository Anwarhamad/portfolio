import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {FaBlog} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiFileUserLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  // actibeNav is the home
  const[activeNav, setActiveNav] = useState('#');
  function ActiveTab(index) {
    setActiveNav(index)
  }
  return (
    // if active nav == the home then the classname will be active 
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
      <a href='#projects' onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdWorkOutline /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''} ><AiOutlineUser /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></a>
      <a href='#cv' onClick={()=> setActiveNav('#cv')} className={activeNav === '#cv'? 'active' : ''}><RiFileUserLine /></a>


      
    </nav>
  )
}

export default Nav