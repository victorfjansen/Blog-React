import Erro from 'Helpers/Erro'
import Loading from 'Helpers/Loading'
import useFetch from 'hooks/useFetch'
import React from 'react'
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
        <div className="img-banner hidden">
          <img src={data[0].imageUrl} alt="Banner" />
        </div>
        <div className="row mt-3">
          <h6 className="color-gray text-center">{data[0].date}</h6>
          <h6 className="uppercase color-primary text-center">
            {data[0].category}
          </h6>

          <h4 className="text-center">{data[0].title}</h4>
          <p className="mt-1 text-center">{data[0].resume}</p>

          <div className="my-3 flex-center">
            <a href="" className="link color-primary">
              {' '}
              Ler Mais{' '}
            </a>
          </div>
        </div>
      </section>
    )
}

export default Banner
