import React from 'react'
import "./Home.css"
import Github from "./github.png"
import Linkedin from "./linkedin-logo.png"
import Instagram from "./instagram.png"
export default function Home() {
  return (
    <div>
        <div className='hero'>
          <section>
            <h3>HELLO, I'M A</h3>
            <h1 className='headingmain'>Front-end Web  
              <span> D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
            </h1>
            <p>Hi, I'm Abhinav Kumar, a passionate Front-end Developer from<br>
            </br>India. Welcome to my protfolio.</p>
            <a href='./cv.pdf' download><button className='resume'>Resume</button></a>
            <button className='hire'>Hire me</button>
            
          </section>
        </div>
        <div className='social'>
          
         <a href='https://github.com/Abhinav-not-found' target='blank'> <img className='github' src={Github}></img></a>
          <div>
            <a href='https://www.linkedin.com/in/abhinav-kumar-not-found' target='blank'><img className='Linkedin' src={Linkedin}></img></a>
          </div>
          <div>
            <a href='https://www.instagram.com/abhinav_not_found_/' target='blank'><img className='Instagram' src={Instagram}></img></a>
          </div>
          
          <div className='vl'></div>
        </div>
    </div>
  )
}
