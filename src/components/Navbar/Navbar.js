import React, {useRef,useState} from 'react'
import logo from "./Subtract.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import music from "./song3.mp3"

export default function Navbar() {
const [play ,setPlay] = useState(true)
function handleplay(){
  if(play){setPlay(false)
   
  } 
 else{setPlay(true)}
    
}

const ref=useRef(null)
const [click,setClick] =useState(false)
const handleClick = ()=>{
  setClick(!click);
  if(!click){
    ref.current.play();
    
  }
  else{
    ref.current.pause();
  }
}
function work(){
  handleClick()
  handleplay()
}
  return (
    <div>
        <nav>
         <img src={logo}></img>
        
         <button id='play'onClick={()=>work()}>{`${play?("▶"):("|  |")}`}<audio src={music} ref={ref} loop/></button>
          
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
          </ul>
        </nav>
    </div>
  )
}
