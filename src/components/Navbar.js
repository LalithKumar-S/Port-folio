import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    <nav className='Nav'>
      <div className='nav-brand'>
        <p className='heroName'>LALITH KUMAR</p>
      </div>

      <div className='menu-icon' onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </div>
      
      <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <ul className='navLinks'>
          <li><NavLink className={({isActive}) => (isActive ? 'btn activeBtn' : 'btn')} to='/' onClick={closeMenu}>HOME</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'btn activeBtn' : 'btn')} to='/about' onClick={closeMenu}>ABOUT ME</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'btn activeBtn' : 'btn')} to='/education' onClick={closeMenu}>EDUCATION</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'btn activeBtn' : 'btn')} to='/research' onClick={closeMenu}>RESEARCH</NavLink></li>
        </ul>
        <NavLink className={({isActive}) => (isActive ? 'contact activecontact' : 'contact')} to='/contact' onClick={closeMenu}>CONTACT ME</NavLink>
      </div>
    </nav>
    </>
  )
}

