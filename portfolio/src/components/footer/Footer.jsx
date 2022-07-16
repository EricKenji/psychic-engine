import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Eric K Furukawa</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://github.com/EricKenji" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/eric-furukawa/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
      </div>

    </footer>
  )
}

export default Footer