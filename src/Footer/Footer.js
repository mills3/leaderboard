import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer>
      <a href="https://www.freecodecamp.com/" target="_blank">freeCodeCamp.com</a>
      <button onClick={props.handleClick}>About</button>
      <a href="https://github.com/mills3/leaderboard" target="_blank">Coded by Mills3</a>

    </footer>
  );
}

export default Footer;
