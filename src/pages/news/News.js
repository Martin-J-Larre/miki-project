import React from 'react';
import NewsBox from '../../components/newsBox/NewsBox';
import './news.css'

const News = () => {


  return (
    <section>
      <h1>News</h1>
      <div className='news-container'>
        <NewsBox
          imgNews={"https://img.freepik.com/free-photo/famous-tower-bridge-evening-london-england_268835-1390.jpg?size=626&ext=jpg&ga=GA1.2.1964942655.1646467495"}
          textNews={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore."}/>
        <NewsBox
          imgNews={"https://img.freepik.com/free-photo/view-new-york-city-manhattan-midtown-dusk-with-skyscrapers-illuminated-east-river_268835-754.jpg?t=st=1652406267~exp=1652406867~hmac=bb6ea8c13a9bed84fb7433844b15b4eeb6b1b04c0f3840ea44567fc771ae8789&w=740"}
          textNews={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque "}/>
        <NewsBox
          imgNews={"https://img.freepik.com/free-photo/osaka-castle_74190-5278.jpg?size=626&ext=jpg&ga=GA1.2.1964942655.1646467495"}
          textNews={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio."}/>
      </div>
    </section>
  )
}

export default News