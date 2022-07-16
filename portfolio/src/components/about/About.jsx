import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {BsBook} from 'react-icons/bs'
import {AiFillProfile} from 'react-icons/ai'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Eric K Furukawa" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsBook className='about__icon'/>
              <h5>Experience</h5>
              <small>Bootcamp Graduate</small>
            </article>
            <article className='about__card'>
              <AiFillProfile className='about__icon'/>
              <h5>Proficencies</h5>
              <small>+15</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>15+</small>
            </article>
          </div>

          <p>
Welcome to my Portfolio! My name is Eric Furukawa. I am an aspiring full-stack developer based out of Sacramento, CA.

In 2021, due to the changing job landscape and my love for learning, I made the jump into becoming a web developer.

I decided to enroll in a 6 month coding bootcamp to jump start my foray into a new career path.

Up to this point, I have focused on Javascript, more specifically, MERN stack. 

For fun, my hobbies include traveling, watching sports, and playing video games.          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About