import React from 'react'

//Import Components

import Hero from './Hero'
import Banner from './Banner'
import Card from './CardSection'
import Main from './Main'
import Head from 'Helpers/Head'

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="animeLeft">
      <Head title="Home" />
      <Hero />
      <Main />
      <Card />
      <Banner />
    </div>
  )
}

export default Home
