import React from 'react';
import './newsBox.css'

const NewsBox = ({ imgNews, textNews, altNewsImg }) => {
  return (
    <>
      <div className='box-news'>
        <div className='img-box'>
          <img src={ imgNews } alt={ altNewsImg } />
        </div>
        <div className='text-news'>
          <p>{ textNews }</p>
        </div>
      </div>
    </>
  )
}

export default NewsBox