import React from 'react';
import NewsBox from '../../components/newsBox/NewsBox';
import './news.css'

//London
let titleLondon = "Interview with Elle UK"
let textLondon = "Stay tuned for an upcoming interview with Elle UK, where Miki Arndt discusses her transition from writing short stories to the novel. She will share how the MFA world helped shape her writing, influential writers, favorite writing prompts and practices, and how she navigates the world of publishing in the midst of the pandemic."
//New York
let titleNY = "Recipient of the NYC Center for Fiction Fellowship"
let textNY = "The NYC Emerging Writers Fellowship is offered by the Center for Fiction, a 200-year-old nonprofit in New York City. The fellowship includes a grant and a studio space at the Center, group dinners with agents and editors, two public readings, and an editor who works with them on their submissions."
//Osaka
let titleOsaka = "Finalist for the Tsumura prize"
let textOsaka = `One of the finalists for the Tsumura prize, a Japanese literary award presented biannually for early-career writers. Miki Arndt's submission, "Jinmengyo" is the story of a family who loses their son in a tragic accident, only to find that he may have come back to them in the form of a fish.`

const News = () => {


  return (
    <section>
      <h1>News</h1>
      <div className='news-container'>
        <NewsBox
          imgNews={"https://img.freepik.com/free-photo/famous-tower-bridge-evening-london-england_268835-1390.jpg?size=626&ext=jpg&ga=GA1.2.1964942655.1646467495"}
          titleNews={ titleLondon }
          textNews={ textLondon }
        />
        <NewsBox
          imgNews={"https://img.freepik.com/free-photo/view-new-york-city-manhattan-midtown-dusk-with-skyscrapers-illuminated-east-river_268835-754.jpg?t=st=1652406267~exp=1652406867~hmac=bb6ea8c13a9bed84fb7433844b15b4eeb6b1b04c0f3840ea44567fc771ae8789&w=740"}
          titleNews={ titleNY }
          textNews={ textNY }
        />
        <NewsBox
          imgNews={"https://img.freepik.com/free-photo/osaka-castle_74190-5278.jpg?size=626&ext=jpg&ga=GA1.2.1964942655.1646467495"}
          titleNews={ titleOsaka }
          textNews={ textOsaka }
          />
      </div>
    </section>
  )
}

export default News;