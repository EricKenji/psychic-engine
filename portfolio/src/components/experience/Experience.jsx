import React from 'react'
import './experience.css'
import { FaAsterisk } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Proficiencies</h5>
      <h2>My Proficiencies</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon'/>
              <div>
                <h4>Node js</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon'/>
              <div>
                <h4>GraphQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaAsterisk className='experience__details-icon'/>
              <div>
                <h4>Sequelize</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience