import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me-2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Chotiya Priya</h1>
        <h3 className='text-light'>Fullstack Developer</h3>
      <CTA/>
<HeaderSocials/>
      <div className="me"></div>
        <img src={ME} className="main-image" alt="me" />
      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header