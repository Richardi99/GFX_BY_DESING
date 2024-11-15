import React from 'react'
import { Helmet } from 'react-helmet'
import '../styles/Prime.css'

function Prime() {
  return (
    <>
      <Helmet>
        <title>GFX BY DESIGN</title>
        <meta name='description' content='Your partner in transforming ideas into stunning visuals.' />
      </Helmet>
      <div className='Prime-contailer'>
        <h1><span className='h1-span'>Building</span> brands <br/> with <span className='h1-span animate'>purpose</span></h1> 
      </div>
    </>
  )
}

export default Prime