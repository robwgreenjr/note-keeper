import React from 'react';

import ReactIcon from '../../images/react-icon.png';
import MySQLSVG from '../../images/mysql.svg';
import LaravelIcon from '../../images/laravel_icon.png';
import './styles.scss';

const Icons = () => {
  return (
    <header className="header__icons">
      <img src={ReactIcon} alt="React icon" className="react__logo" />
      <span>+</span>
      <img src={LaravelIcon} alt="Laravel icon" />
      <span>+</span>
      <img
        src={MySQLSVG}
        alt="MySQL icon"
        style={{ width: '100px', height: '60px' }}
      />
    </header>
  );
};

export default Icons;
