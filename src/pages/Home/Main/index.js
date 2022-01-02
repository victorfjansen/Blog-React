import React from 'react'
import List from './List'
import MoreVoted from './MoreVoted'

const Main = ({ main }) => {
  return (
    <section className="container">
      <div className="row">
        <MoreVoted />
        <List main={main} />
      </div>
    </section>
  )
}

export default Main
