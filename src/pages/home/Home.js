import React from 'react';
import mikiHomePic from '../../img/miki_01_color_small.jpg';
import styles from './home.module.css'

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.boxRight}>
  
      </div>
      <div className={styles.boxLeft}>
        <img src={ mikiHomePic } alt="Miki Arndt"/>
      </div>
    </section>
  )
}

export default Home
