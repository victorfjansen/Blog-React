import React from 'react'
import CardList from './CardList'

const Card = () => {
  return (
    <>
      <section className="container">
        <h3>Posts com mais visualizações</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque.
        </p>
        <CardList />
      </section>
    </>
  )
}

export default Card
