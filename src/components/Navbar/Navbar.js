import React from 'react'
import logo from "./Subtract.png"
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
        <nav>
         <img src={logo}></img>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
    </div>
  )
}
