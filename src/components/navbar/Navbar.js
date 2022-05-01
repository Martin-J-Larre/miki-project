import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='left-side'>
          <h1>MIKI ARNDT</h1>
        </div>
        <div className='right-side'>
          <Link to='/about'>About</Link>
          <Link to='/publications'>Publications</Link>
          <Link to='/news'>News</Link>
          <Link to='/events'>Events</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;