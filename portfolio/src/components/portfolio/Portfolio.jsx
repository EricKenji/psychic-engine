import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/whiskeybusiness.png';
import IMG2 from '../../assets/collab-cargo.png';
import IMG3 from '../../assets/stock-tracker.png';
import IMG4 from '../../assets/budget-tracker.png';
import IMG5 from '../../assets/tech-talk.png';
import IMG6 from '../../assets/note-taker.png';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Whiskey Business" />
          </div>
          <h3>Cocktail Search Engine</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Whiskey Business" />
          </div>
          <h3>Job Posting App</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Whiskey Business" />
          </div>
          <h3>Stock Tracker</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Whiskey Business" />
          </div>
          <h3>Budget Tracker</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Whiskey Business" />
          </div>
          <h3>Blog Website</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Whiskey Business" />
          </div>
          <h3>Note Taker</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://google.com" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio