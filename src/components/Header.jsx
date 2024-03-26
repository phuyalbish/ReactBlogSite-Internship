import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../images/logo.png';
import Profile  from '../images/profile8.jpg';
import { FaBars } from "react-icons/fa6";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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


   const [isNightMode, setIsNightMode] = useState(false)
  
  // const setNightHandler = () => {
  //   if(window.innerWidth < 800){
  //     setIsNavShowing(false);
  //   }else{
  //     setIsNavShowing(true);
  //   }
  // }
  
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
            <li><Link to="/writer"  onClick={closeNavHandler}>Categories</Link></li>
            <li><DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <ul>
                <li><Dropdown.Item href="#/action-1">Action</Dropdown.Item></li>
              <li><Dropdown.Item href="#/action-2">Another action</Dropdown.Item></li>
              <li><Dropdown.Item href="#/action-3">Something else</Dropdown.Item></li>
              </ul>
            </DropdownButton>
            </li>
            <li><Link to="/create"  onClick={closeNavHandler}>Create Post</Link></li>
            <li><Link to="/logout"  onClick={closeNavHandler}>Logout</Link></li>
            <li className="nightlightli" onClick={() => setIsNightMode(!isNightMode)}>
              {
                isNightMode ? <MdOutlineLightMode class="NightLight" onClick={LightMode}/> : <MdOutlineNightlight class="NightLight" onClick={NightMode}/>
              }
              </li>
              
            <li><Link to="/profile/Bishal"  onClick={closeNavHandler}><img src={Profile} className="profile_img" alt="" /></Link></li>
        </ul>}
        <button className="nav_toggle-btn" onClick = {() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
          </button>
      </div>
    </nav>
  )
}
const LightMode = () => {
      
}

const NightMode = () => {
    
}




export default Header