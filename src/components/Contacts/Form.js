import React from 'react'
import './Form.css'
export default function Form() {
  return (
    <div>
      <div className='outer_area'>
        <h1>Get in touch</h1>
        
        <div id='abc' >
          <div>
        <p>FULL NAME</p>
        <input id='name_inp' placeholder='Name'></input>
        </div>
        <div>
        <p>EMAIL ADDRESS</p>
        <input id='email_inp' placeholder='Email'></input>
        </div>
        </div>
        <p id='subject'>SUBJECT</p>
        <input id='sub_inp' placeholder='Subject'></input>
        <p id='message'>MESSAGE </p>
        <textarea id='mesg_inp' placeholder='Message'></textarea><br></br>
        <button id='btn'>Send Message</button>
        </div>
    </div>
  )
}
