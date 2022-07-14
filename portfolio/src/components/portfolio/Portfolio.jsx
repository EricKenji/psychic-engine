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
          <div className="portfolio__item-cta">
            <a href="https://github.com/EricKenji/whiskey-business" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://arcane-shelf-84573.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Whiskey Business" />
          </div>
          <h3>Job Posting App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EricKenji/collaborative-cargo" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://collaborative-cargo.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
  


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Whiskey Business" />
          </div>
          <h3>Stock Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EricKenji/stock-tracker" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://brandonsauer8.github.io/stock-tracker/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
  

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Whiskey Business" />
          </div>
          <h3>Budget Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EricKenji/expert-spork" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://immense-refuge-18672.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Whiskey Business" />
          </div>
          <h3>Blog Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EricKenji/tech-talk" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://shrouded-gorge-11182.herokuapp.com/post/4" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="Whiskey Business" />
          </div>
          <h3>Note Taker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/EricKenji/note-keeper" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://nameless-retreat-41957.herokuapp.com/notes" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio