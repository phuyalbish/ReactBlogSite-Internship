import React from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../images/logo.png';
import { FaBars } from "react-icons/fa6";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


import {AiOutlineClose} from "react-icons/ai";

const Header = () => {
  return (
    
    <nav>
      <div className="container navbar_container">
        <div className="logonheader">
            
        <Link to="/" className="nav_logo">
            <img src={Logo} alt="Nav Logo"/>
        </Link>
        
            <h3>Webodle Inc.</h3>
        </div>
        <ul className="navbar_menu"> 
            <li><Link to="/writer">Writers</Link></li>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/profile/Bishal">Bishal Phuyal</Link></li>
            <li><MdOutlineLightMode /></li>
        </ul>
        <button className="toggleNavBar">
          <AiOutlineClose/>
          </button>
      </div>
    </nav>
  )
}

export default Header