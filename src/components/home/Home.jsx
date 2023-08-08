import React from 'react'
import me from './../../assets/me.jpg'
import '../home/home.css'
import Nav from '../nav/Nav'
import { useState } from 'react'

const Home = () => {
   return (
    <header>
    <div className='container home_container'>
      <h4>Hello I am </h4>
      <h1>Anwar AL-Salmani</h1>
      <p className='text-light home_discription'> I am passionate graphic designer. I design user interfaces for websites and applications, flyers, instagram posts, branding and reports. </p>
      
      <div className='img'> 
        <img src={me} alt='me' />
      </div>
      
    </div>
    </header>
    )
}

export default Home