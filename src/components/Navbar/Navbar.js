import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./Subtract.png";
import music from "./song3.mp3";
import "./Navbar.css";

export default function Navbar() {
  const [play, setPlay] = useState(true);
  const [click, setClick] = useState(false);

  const ref = useRef(null);

  function handlePlay() {
    setPlay(!play);
  }

  function handleClick() {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  function work() {
    handleClick();
    handlePlay();
  }

  return (
    <div>
      <button id='play' onClick={work}>{play ? "▶" : "|  |"}<audio src={music} ref={ref} loop /></button>
      <nav>
        <img src={logo} alt="Logo" />
        
        

        <ul>
          <li><NavLink to='/' >Home</NavLink></li>
          <li><NavLink to='/About' >About</NavLink></li>
          <li><NavLink to='/Contact' >Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
