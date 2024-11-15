import React, { useState } from 'react'
import '../styles/ButtonNav.css'

const ButtonNav = () => {

  const [isActive, setIsActive] = useState(false);

  const toogleMenu = () => {
    setIsActive(!isActive);
  }

  return (
    <button className={`ButtonNavMenu ${isActive ? 'active' : ''}`}
    onClick={toogleMenu}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  )
}

export default ButtonNav