import Erro from 'Helpers/Erro'
import Loading from 'Helpers/Loading'
import useFetch from 'hooks/useFetch'
import React from 'react'
import { Link } from 'react-router-dom'
import { BANNER_FETCH } from 'services/api'

const Banner = () => {
  const { request, data, error, loading } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const { url, options } = BANNER_FETCH(
        '/posts?_sort=date&_order=desc&_limit=1'
      )
      await request(url, options)
    })()
  }, [request])

  if (loading) return <Loading />
  else if (error) return <Erro error={error} />
  else
    return (
      <section className="container">
        <Link to={`/post/${data[0].id}`} className="img-banner hidden">
          <img src={data[0].imageUrl} alt="Banner" />
        </Link>
        <div className="row mt-3">
          <h6 className="color-gray text-center">{data[0].date}</h6>
          <h6 className="uppercase color-primary text-center">
            {data[0].category}
          </h6>

          <h4 className="text-center">{data[0].title}</h4>
          <p className="mt-1 text-center">{data[0].resume}</p>

          <div className="my-3 flex-center">
            <Link to={`/post/${data[0].id}`}>Ler Mais</Link>
          </div>
        </div>
      </section>
    )
}

export default Banner
