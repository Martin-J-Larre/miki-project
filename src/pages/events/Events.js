import React from 'react';
import LinkAdress from '../../components/linkAdress/LinkAdress';
import MapAddress from '../../components/mapAddress/MapAddress';
import ListAddress from '../../components/listAddress/ListAddress';
import styles from './events.css';


const Events = () => {
  return (
    <section>
      <div className={styles.addressContainer}>
              <ListAddress address="Address 1234, Manhattan, New York" listAddressIcon={<LinkAdress />}/>
              <ListAddress address="Address 1234, Manhattan, New York" listAddressIcon={<LinkAdress />}/>
              <ListAddress address="Address 1234, Manhattan, New York" listAddressIcon={<LinkAdress />}/>
      </div>
              <MapAddress />

  </section>
  )
}

export default Events