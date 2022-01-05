import React from 'react'

//Import Components

import Hero from './Hero'
import Banner from './Banner'
import Card from './CardSection'
import Main from './Main'

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="animeLeft">
      <Hero />
      <Main />
      <Card />
      <Banner />
    </div>
  )
}

export default Home
