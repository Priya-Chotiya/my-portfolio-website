import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className='portfolio_item-cta'>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className='portfolio_item-cta'>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className='portfolio_item-cta'>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className='portfolio_item-cta'>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className='portfolio_item-cta'>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
         <div className='portfolio_item-cta'>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>

        </article>
       

      </div>
    </section>
  )
}

export default Portfolio