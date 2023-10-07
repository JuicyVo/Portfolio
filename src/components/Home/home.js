import React, { useState } from 'react';
import './home.css';
import Inosuke from '../../projects/InosukeBobbleHead/inosuke';


const Home = () => {

  const [showInosuke, setShowInosuke] = useState(false);
  const handleWierdButtonClick = () => {
    setShowInosuke(!showInosuke);
  };

  return (
    <div className="home-container">
      <div className="centered-content">
        <div className="greeting">Hi, my name is</div>
        <div className="name">
          William Vo,
          and I make stuff
        </div>
        <div className="specialization">
          I'm a fullstack web developer that currently specializes in React, JS, and SQL
        </div>
      </div>
      <div className='wierdButton'>
        <button className='inosuke-button' onClick={handleWierdButtonClick} >The Wierd Button</button>
      </div>
      {showInosuke && <Inosuke />}
    </div>
  );
};

export default Home;
