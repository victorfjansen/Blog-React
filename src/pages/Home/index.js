import React from 'react'

//Import Components

import Hero from './Hero'
import Banner from './Banner'
import Card from './CardSection'
import Main from './Main'

// import api
import api from 'services/api'

const Home = () => {
  const [main, setMain] = React.useState([])
  const [most, setMost] = React.useState([])
  const [banner, setBanner] = React.useState([])
  const [error, setError] = React.useState([])

  React.useEffect(() => {
    //Five star request
    ;(async () => {
      try {
        const response = await api.get('/posts?_star=5&_limit=2&_order=desc')
        setMain(response.data)
        setError(null)
      } catch (err) {
        setError(err.message)
      }
    })()

    //Banner request
    ;(async () => {
      try {
        const response = await api.get('/posts?_sort=date&_order=desc&_limit=1')
        setBanner(response.data)
        setError(null)
      } catch (err) {
        setError(err.message)
      }
    })()

    //Most viwed posts request
    ;(async () => {
      try {
        const response = await api.get('/posts?_limit=3')
        setMost(response.data)
        setError(null)
      } catch (err) {
        setError(err.message)
      }
    })()
  }, [])

  return (
    <>
      <Hero />
      <Main main={main} />
      <Card cards={most} />
      <Banner banner={banner} />
    </>
  )
}

export default Home
