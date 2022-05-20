import React from 'react';
import styles from'./newsBox.module.css'

const NewsBox = ({ imgNews, textNews, altNewsImg }) => {
  return (
    <>
      <div className={styles.boxNews}>
        <div className={styles.imgBox}>
          <img src={ imgNews } alt={ altNewsImg } />
        </div>
        <div className={styles.textNews}>
          <p>{ textNews }</p>
        </div>
      </div>
    </>
  )
}

export default NewsBox