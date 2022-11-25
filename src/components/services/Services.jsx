import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_conainer">
        <div className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck/>
              <p>  Architects and develops websites and applications using web technologies (i.e., JavaScript, Angular, React, and NextJS </p>
            </li>
            <li>
              <BiCheck/>
              <p> Creation of elements and features of a website that will then be seen by the user </p>
            </li>
            <li>
              <BiCheck/>
              <p>Analyze the client-side performance of a webpage to better understand the consumer experience. </p>
            </li>
            
          </ul>
        </div>
        <div className="service">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck/>
              <p>Become adept at interacting with behind-the-scenes technologies, like databases and servers, and also at solving more complex sets of problems. </p>
            </li>
            <li>
              <BiCheck/>
              <p>Level up with , popular technologies, database Like nodejs , express js , mongoDB, Mysql , Sequlize</p>
            </li>
            <li>
              <BiCheck/>
              <p>Learn to make applications faster, more secure, more stable, and more capable.</p>
            </li>
            
          </ul>
        </div>
        <div className="service">
          <div className="service_head">
            <h3>Web Designing</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck/>
              <p>Design and layout websites </p>
            </li>
            <li>
              <BiCheck/>
              <p>Plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. </p>
            </li>
            <li>
              <BiCheck/>
              <p>Think through the navigation of a site to provide the best user experience </p>
            </li>
            <li>
              <BiCheck/>
              <p>Coordinate with writers and designers to create a site and Work in Adobe programs to create visuals, graphics, or animations</p>
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services