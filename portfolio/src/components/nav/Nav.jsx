import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {BsPersonSquare, BsPaperclip} from 'react-icons/bs';
import {AiFillContacts} from 'react-icons/ai';


const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome/></a>
      <a href="#about"><BsPersonSquare/></a>
      <a href="#portfolio"><BsPaperclip/></a>
      <a href="#contact"><AiFillContacts/></a>
    </nav>
  )
}

export default Nav