import React from 'react'
import './cv.css'
import CV from '../../assets/Anwar.pdf'

const Cv = () => {
  return (
    <section id='cv'>
      <div className='container home_container '>
        <h2>Here is my CV</h2>
        <div className='cta'>
        <a href={CV} download className='btn '> download CV</a>
           </div>

        </div>

    </section>
  )
}

export default Cv