import React from 'react'
import '../styles/MarcoDiv.css'

function MarcoDiv({ children }) {
  return (
    <div className='MarcoDiv'>
      <div className='MarcoDiv-header'>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='MarcoDiv-body'>
        {children}
       {/*  <div className="MarcoDiv-body-numero"></div>
        <div className="MarcoDiv-body-title"></div>
        <div className="MarcoDiv-body-description"></div> */}
      </div>
    </div>
  )
}

export default MarcoDiv