import React from 'react';
import mikiHomePic from '../../img/difu-3.png';
import styles from './home.module.css'

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.boxRight}>
      <blockquote className={styles.quote}>
        <q>
        Sometimes fiction is closer to the truth than real life ever is.
        </q>
      </blockquote>
      </div>
      <div className={styles.boxLeft}>
        <img src={ mikiHomePic } alt="Miki Arndt"/>
      </div>
    </section>
  )
}

export default Home
