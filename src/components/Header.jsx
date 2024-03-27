import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Profile from "../images/profile8.jpg";
import { FaBars } from "react-icons/fa6";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

import DarkMode from "./DarkMode/DarkMode";

import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav>
      <div className="container navbar_container">
        <div className="logonheader">
          <Link to="/" className="nav_logo" onClick={closeNavHandler}>
            <img src={Logo} alt="Nav Logo" />
          </Link>

          <h3>Webodle Blog</h3>
        </div>
        {isNavShowing && (
          <div className="navbar_menu">
            <Link
              to="/writer"
              className="nav_menu_inner"
              onClick={closeNavHandler}
            >
              Writers
            </Link>
            <Link
              to="/create"
              className="nav_menu_inner"
              onClick={closeNavHandler}
            >
              <IoCreateOutline className="nav_create-btn" /> Create
            </Link>
            <DarkMode className="nav_menu_inner" />
            <Link
              to="/profile/Bishal"
              className="nav_menu_inner"
              onClick={closeNavHandler}
            >
              <img src={Profile} className="profile_img" alt="" />
            </Link>
          </div>
        )}
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

const changeColor = () => {
  const root = document.documentElement;
  root.style.setProperty("--main-color", "red");
  // setColor('red'); // Update state variable if needed
};

export default Header;
