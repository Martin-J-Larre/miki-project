import React from 'react';
import mikiHomePic from '../../img/miki_01_color_small.jpg';
import './home.css'

const Home = () => {
  return (
    <section className='home-container'>
      <div className='box-right'>
  
      </div>
      <div className='box-left'>
        <img src={ mikiHomePic } alt="Miki Arndt"/>
      </div>
    </section>
  )
}

export default Home
