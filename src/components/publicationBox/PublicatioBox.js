import React from 'react';
import styles from'./publicationBox.module.css';
import { Link } from 'react-router-dom';

const PublicationBox = ({ urlImg, altImg, hLink, titleLink, textLink}) => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.imageBox}>
          <img src={urlImg} alt={altImg} />
        </div>
        <div className={styles.linkBox}>
            <h4 className={styles.titleText}>{titleLink}</h4>
            <Link to={hLink}>{textLink}</Link>
        </div>
      </div>
    </div>
  )
}

export default PublicationBox