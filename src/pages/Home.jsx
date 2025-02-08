import React, { useState } from 'react';
import darkModeBg from "../images/Dark Mode Bg.png";
import lightModeBg from "../images/Light Mode Bg.png";

const Home = ({ theme, setTheme }) => {
  
  
  return (
    <div className='home-container'>
      <img src={theme=="light"?lightModeBg:darkModeBg} />
    </div>
  )
}

export default Home
