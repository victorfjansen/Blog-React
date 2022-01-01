import React from 'react'
import List from './List'
import MoreVoted from './MoreVoted'

const Main = () => {
  return (
    <section className="container">
      <div className="row">
        <MoreVoted />
        <List />
      </div>
    </section>
  )
}

export default Main
