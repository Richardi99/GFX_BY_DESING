import React from 'react';
import '../styles/ButtonNav.css';

const ButtonNav = ({ isActive, onClick }) => {
  return (
    <button
      className={`ButtonNavMenu ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default ButtonNav;
