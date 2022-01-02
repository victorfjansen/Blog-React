import React from 'react'
import CardComponent from '../CardComponent'

const CardList = ({ cards }) => {
  return (
    <div className="row mt-4">
      {cards.map(card => (
        <CardComponent data={card} key={card.id} />
      ))}
    </div>
  )
}

export default CardList
