import React from 'react'
import logo from "./Subtract.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav>
         <img src={logo}></img>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
          </ul>
        </nav>
    </div>
  )
}
