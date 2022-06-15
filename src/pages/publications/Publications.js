import React from 'react';
import PublicationBox from '../../components/publicationBox/PublicatioBox';
import './publications.css';

const Publications = () => {
  // LA Review of Books ...
  let titleLA = `"In Another Life"` 
  let textLA = "Los Angeles Review of Books Quarterly Journal";
  let altLA = "Pic Los Angeles Review of Books Quarterly Journal";
  // Colorado ...
  let titleColorado = `"Jinmengyo"` 
  let textColorado = "Colorado Review";
  let altColorado = "Pic Colorado Review";
  // LA Review of Books ...
  let titleRedivider = `"A House for Dahlia"` 
  let textRedivider = "Redivider";
  let altRedivider = "Pic Redivider";

  return (
    <section>
      <h1>Publications</h1>
      <div  className='container-publications'>
        
        <PublicationBox 
          urlImg={"https://lareviewofbooks.org/_next/image/?url=https%3A%2F%2Flareviewofbooks.org%2Fwp-content%2Fuploads%2F2020%2F11%2FDomestic-Cover-Final.jpg&w=1920&q=75"}
          titleLink={ titleLA }
          hLink= { "https://lareviewofbooks.org/edition/quarterly-journal-no-28-domestic-issue/" }
          textLink={ textLA }
          altImg={ altLA }
          />
        <PublicationBox 
          urlImg={"https://coloradoreview.colostate.edu/wp-content/uploads/sites/81/2013/12/CRFall2103coverfront1-e1386099344304.jpg"}
          titleLink={ titleColorado }
          hLink= { "https://coloradoreview.colostate.edu/books/colorado-review-fallwinter-2013/"}
          textLink={ textColorado }
          altImg={ altColorado }
          />
        <PublicationBox 
          urlImg={"https://images.squarespace-cdn.com/content/v1/570fd9def8508295eecfc1af/1582657028179-KYUMC8N6U0KY6WR7KHQU/14.2_Cover.jpg"}
          titleLink={ titleRedivider }
          hLink= { "https://images.squarespace-cdn.com/content/v1/570fd9def8508295eecfc1af/1582657028179-KYUMC8N6U0KY6WR7KHQU/14.2_Cover.jpg"}
          textLink={ textRedivider }
          altImg={ altRedivider }
          />
        
      </div>
    </section>
  )
}

export default Publications;