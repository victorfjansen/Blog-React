import React from 'react'
import ListComponent from '../ListComponent'

const List = ({ main }) => {
  return (
    <div className="grid-7">
      {main.map(item => {
        return <ListComponent data={item} key={item.id} />
      })}
    </div>
  )
}

export default List
