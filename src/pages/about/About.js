import React from 'react';
import mikiAboutPic from '../../img/miki_02_color_small.jpg';
import styles from './about.module.css'

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.imgBoxAbout}>
        <img src={ mikiAboutPic } alt="Miki Arndt"/>
      </div>
      <div className={styles.textBoxAbout}>
        <h1 className={styles.titleAbout}>About me</h1>
        <p>Miki Arndt's fiction has appeared in the Colorado Review and LARB Quarterly Journal. She has received a fellowship from the Center for Fiction in New York. She has a BA from Johns Hopkins University and an MFA in writing from Columbia University. She is from Kobe, Japan and now lives in New York with her husband and daughter.</p>
      </div>
  </section>
  )
}

export default About