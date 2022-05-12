import React from 'react';
import PublicationBox from '../../components/publicationBox/PublicatioBox';
import './publications.css';

const Publications = () => {

  let textColorado = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  let altColorado = "Lorem ipsum";
  return (
    <section>
      <h1>Publications</h1>
      <div  className='container-publications'>
        
        <PublicationBox 
          urlImg={"https://coloradoreview.colostate.edu/wp-content/uploads/sites/81/2013/12/CRFall2103coverfront1-e1386099344304.jpg"}

          hLink= { "https://coloradoreview.colostate.edu/books/colorado-review-fallwinter-2013/"}
          textLink={ textColorado }
          altImg={ altColorado }
          />
        <PublicationBox 
          urlImg={"https://coloradoreview.colostate.edu/wp-content/uploads/sites/81/2013/12/CRFall2103coverfront1-e1386099344304.jpg"}

          hLink= { "https://coloradoreview.colostate.edu/books/colorado-review-fallwinter-2013/"}
          textLink={ textColorado }
          altImg={ altColorado }
          />
        <PublicationBox 
          urlImg={"https://images.squarespace-cdn.com/content/v1/570fd9def8508295eecfc1af/1582657028179-KYUMC8N6U0KY6WR7KHQU/14.2_Cover.jpg"}

          hLink= { "https://coloradoreview.colostate.edu/books/colorado-review-fallwinter-2013/"}
          textLink={ textColorado }
          altImg={ altColorado }
          />
        
      </div>
    </section>
  )
}

export default Publications