import React from 'react';
import styles from'./publicationBox.module.css';
import { Link } from 'react-router-dom';

const PublicationBox = ({ urlImg, altImg, hLink, textLink}) => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.imageBox}>
          <img src={urlImg} alt={altImg} />
        </div>
        <div className={styles.linkBox}>
            <Link to={hLink}>{textLink}</Link>
        </div>
      </div>
    </div>
  )
}

export default PublicationBox