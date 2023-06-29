import React, { Component } from 'react'
import image from "./Animals.png"
import "./Form.css"
export default class Form extends Component {
  render() {
    return (
      <div>
        <div className='outer'>
          
            <form action='https://formspree.io/f/xaygwpyn' method='post' className='form'>
              <input className='name' type='text' name='Name' placeholder='Name' required></input>
              <input className='email' type='text' name='Email' placeholder='Email' required></input>
              <textarea className='message' placeholder='Message'  name='Message' cols="30" rows="10" required></textarea>
              <button className='submit' type='submit'>Send</button>
            </form>
            <div className='image'>
              <img className='img' src={image}></img>
            </div>
          </div>
       </div>
        
    )
  }
}
