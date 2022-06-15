import React from 'react';
import {Link} from 'react-router-dom';
import styles from './eventsBox.module.css';


const EventsBox = ({eventPic, urlDetailEvent}) => {
  return (
    <>
      <div className={styles.eventsBoxContainer}>
        <img className={ styles.eventImg } src={ eventPic } alt='Event pic'/>
        <div className={styles.linksContainer}>
          <Link className={styles.linkToEvents} to= { urlDetailEvent} target="_blank"> More details... </Link>
        </div>
      </div>
    </>
  )
}

export default EventsBox;