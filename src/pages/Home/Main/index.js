import Erro from 'Helpers/Erro'
import Loading from 'Helpers/Loading'
import useFetch from 'hooks/useFetch'
import React from 'react'
import { MAIN_FETCH } from 'services/api'
import List from './List'
import MoreVoted from './MoreVoted'

const Main = () => {
  const { request, data, loading, error } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const { url, options } = MAIN_FETCH('/posts?_star=5&_limit=2&_order=desc')
      await request(url, options)
    })()
  }, [request])

  if (loading) return <Loading />
  else if (error) {
    return <Erro error={error} />
  } else {
    return (
      <section className="container">
        <div className="row">
          <MoreVoted />
          <List main={data} />
        </div>
      </section>
    )
  }
}

export default Main
