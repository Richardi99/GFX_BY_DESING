import React from 'react'
import '../styles/Us.css'
import MarcoDiv from '../component/MarcoDiv'

function Us() {
  return (
    <section id='Us'>
      <div className='Us-container center height-general M-top'>

      <div className='Us-container-Text'>
        <h2>Us</h2>
        <div className='Us-Titles'>
          Creative - Innovation - Strategy
        </div>
        <div className='Us-text'>
          <p>Our <strong>Washington DC</strong> - based team of marketers, creatives, designers, developers, communicators, and engineers combines <strong>innovation</strong> with <strong>strategy.</strong> We dive deep into understanding each client’s unique needs to deliver solutions that drive growth and achieve marketing goals.</p>
        </div>
      </div>

      <div className='Us-container-Videos'>
        <div className='Us-container-Img-video1'>
          VIDEO 1<video src="#">Video1</video>
        </div>
        <div className='Us-container-Img-video1'>
        VIDEO 2<video src="#">Video2</video>
        </div>
      </div> 

      </div>

      <MarcoDiv/>
    </section>
  )
}

export default Us