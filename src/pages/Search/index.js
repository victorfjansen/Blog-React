import Erro from 'Helpers/Erro'
import Loading from 'Helpers/Loading'
import useFetch from 'hooks/useFetch'
import CardList from 'pages/Home/CardSection/CardList'
import React from 'react'
import { useParams } from 'react-router-dom'
import { POST_GET } from 'services/api'

const Search = () => {
  const { searchWord } = useParams()
  const { data, request, loading, error } = useFetch()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    ;(async () => {
      const { url, options } = POST_GET(`/posts/?q=${searchWord}`)
      await request(url, options)
    })()
  }, [searchWord, request])

  if (loading) return <Loading />
  else if (error) return <Erro error={error} />
  else
    return (
      <>
        <section className="container animeLeft">
          <h3>Resultados para: "{searchWord}"</h3>
          <p>
            Confira os post mais relacionados à sua pequisa! Aproveite para se
            atualizar e ver as notícias mais recentes!
          </p>
          <CardList cards={data} />
        </section>
      </>
    )
}

export default Search
