import React from 'react';
import styles from'./navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.leftSide}>
          <Link to='/home'><h1>MIKI ARNDT</h1></Link>
        </div>
        <div className={styles.rightSide}>
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