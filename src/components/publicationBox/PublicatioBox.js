import React from 'react';
import './publicationBox.css';
import { Link } from 'react-router-dom';

const PublicationBox = ({ urlImg, altImg, hLink, textLink}) => {
  return (
    <div>
      <div className='box'>
        <div className='image-box'>
          <img src={urlImg} alt={altImg} />
        </div>
        <div className='link-box'>
            <Link to={hLink}>{textLink}</Link>
        </div>
      </div>
    </div>
  )
}

export default PublicationBox