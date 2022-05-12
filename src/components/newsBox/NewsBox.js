import React from 'react'

const NewsBox = ({ imgNews, textNews }) => {
  return (
    <>
      <div className='box-news'>
        <div className='img-box'>
          <img src={ imgNews } />
        </div>
        <div className='text-news'>
          <p>{ textNews }</p>
        </div>
      </div>
    </>
  )
}

export default NewsBox