import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h3>Experience</h3>
              <h4>4 Years Working</h4>
            </article>
            
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h3>Projects</h3>
              <h4>20+ Completed</h4>
            </article>
          </div>
          <p>
          Hi, i'm passionate self-taught Javascript/Typescript Full Stack Developer and a web designer from india. who likes exploring new technologies and frameworks for web development.
          It's been more than 4 years since I have been around in product development. I worked on several projects which belong to so many different domains
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About