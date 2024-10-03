import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [active, setActive] = useState('Home'); 

  const handleItemClick = (item) => {
    setActive(item); 
  };

  return (
    <nav className="navbar">
      <ul className="nav-items">
        <li 
          className={`nav-item ${active === 'Home' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Home')}
        >
          Home
        </li>
        <li 
          className={`nav-item ${active === 'Projects' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Projects')}
        >
          {/* <span className="notification-badge">20</span> */}
          Projects
        </li>
        <li 
          className={`nav-item ${active === 'About' ? 'active' : ''}`} 
          onClick={() => handleItemClick('About')}
        >
          About
        </li>
        <li 
          className={`nav-item ${active === 'Contact' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
