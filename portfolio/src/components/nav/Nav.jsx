import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {BsPersonSquare, BsPaperclip, BsBriefcaseFill} from 'react-icons/bs';
import {AiFillContacts} from 'react-icons/ai';
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#top')
  return (
    <nav>
      <a href="#top" onClick={() => setActiveNav('#top')} className={activeNav === '#top' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPersonSquare/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBriefcaseFill/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsPaperclip/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillContacts/></a>
    </nav>
  )
}

export default Nav