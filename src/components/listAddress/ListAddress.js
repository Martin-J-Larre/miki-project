import React from 'react';
import LinkAdress from '../linkAdress/LinkAdress';
import styles from './listAddress.module.css'

const listAddress = ({address, listAddressIcon}) => {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          {address} {listAddressIcon}
        </li>
      </ul>
    </div>
  )
}

export default listAddress;