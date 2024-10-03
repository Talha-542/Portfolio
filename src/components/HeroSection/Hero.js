import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'container dark-mode' : 'container'}>
      <div className='toggle-container'>
        <label className='switch'>
          <input type='checkbox' onChange={toggleDarkMode} />
          <span className='slider'></span>
        </label>
      </div>
      <div className='title'>
        <h1>Websites & Webapps</h1>
        {/* <button className='scrollDown'>Scroll Down</button> */}
      </div>
      <div className='intro'>
        <div className='contact-info'>
          <p>Let’s Talk</p>
          <a href='mailto:hello@joey.co'>hello@joey.co</a>
        </div>
        <div className='description'>
          <p>
            Hello, I’m Talha, a front-end web developer specializing in creating
            responsive and interactive user interfaces, with a focus on
            optimizing performance, user experience, and integrating modern web
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
