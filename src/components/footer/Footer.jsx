import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo' >!! Learning Everyday !!</a>

      <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
      </ul>

       <div className="footer_copyright">
        <small>&copy; Chotiya Priya. All rights reserved.</small>
       </div>
    </footer>
  )
}

export default Footer