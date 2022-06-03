import { LocationOnOutlined } from '@material-ui/icons';
import React from 'react';
import styles from './linkAddress.module.css'


const LinkAdress = () => {
  return (
    <div>
      <span className={ styles.icon}>
        <LocationOnOutlined />
      </span>
    </div>
  )
}

export default LinkAdress