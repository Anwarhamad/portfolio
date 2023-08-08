import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <form action="">
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    
    
    </section>  )
}

export default Contact