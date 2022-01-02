import Erro from 'Helpers/Erro'
import Loading from 'Helpers/Loading'
import useFetch from 'hooks/useFetch'
import React from 'react'
import { VIEW_FETCH } from 'services/api'
import CardList from './CardList'

const Card = () => {
  const { loading, error, data, request } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const { url, options } = VIEW_FETCH('/posts?_limit=3')
      await request(url, options)
    })()
  }, [request])

  if (loading) return <Loading />
  else if (error) return <Erro error={error} />
  else
    return (
      <>
        <section className="container">
          <h3>Posts com mais visualizações</h3>
          <p>
            Confira os post mais vistos dessa mês! Aproveite para se atualizar e
            ver as notícias mais recentes!
          </p>
          <CardList cards={data} />
        </section>
      </>
    )
}

export default Card
