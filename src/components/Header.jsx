import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../images/logo.png';
import Profile  from '../images/profile8.jpg';
import { FaBars } from "react-icons/fa6";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import DarkMode  from './DarkMode/DarkMode'

import {AiOutlineClose} from "react-icons/ai";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true: false)
  
  const closeNavHandler = () => {
    if(window.innerWidth < 800){
      setIsNavShowing(false);
    }else{
      setIsNavShowing(true);
    }
  }

  return (
    
    <nav>
      <div className="container navbar_container">
        <div className="logonheader">
            
        <Link to="/" className="nav_logo" onClick={closeNavHandler}>
            <img src={Logo} alt="Nav Logo"/>
        </Link>
        
            <h3>Webodle Blog</h3>
        </div>
        {isNavShowing && <ul className="navbar_menu"> 
            <li><Link to="/writer"  onClick={closeNavHandler}>Writers</Link></li>
            <li><Link to="/category"  onClick={closeNavHandler}>Category</Link></li>
            
            <li><Link to="/create"  onClick={closeNavHandler}>Create Post</Link></li>
            <li><Link to="/logout"  onClick={closeNavHandler}>Logout</Link></li>
            <li>
           <DarkMode /></li>
            
              
            <li><Link to="/profile/Bishal"  onClick={closeNavHandler}><img src={Profile} className="profile_img" alt="" /></Link></li>
        </ul>}
        <button className="nav_toggle-btn" onClick = {() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
          </button>
      </div>
    </nav>
  )
}


const changeColor = () => {
    const root = document.documentElement;
    root.style.setProperty('--main-color', 'red');
    // setColor('red'); // Update state variable if needed
  };



export default Header