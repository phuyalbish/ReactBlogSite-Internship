import React, { useState } from 'react';
import '../css/Sidebar.css'; // Import CSS for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleMenu}>
        Toggle Menu
      </button>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
   
  );
};

export default Sidebar;