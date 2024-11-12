import React from 'react'
import Prime from '../sections/Prime'
import Us from '../sections/Us'
import Service from '../sections/Service'
import Portfolio from '../sections/Portfolio'
import Contact from '../sections/Contact'

import '../styles/PageMajor.css'

function PageMajor() {
  return (
    <main className='main-container'>
      <section id='prime'>
        <Prime/>
      </section>

      <section id='us'>
        <Us/>
      </section>

      <section id='services'>
        <Service/>
      </section>

      <section id='portfolio'>
        <Portfolio/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>
    </main>
  )
}

export default PageMajor