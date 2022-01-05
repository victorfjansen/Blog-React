import Erro from 'Helpers/Erro'
import Loading from 'Helpers/Loading'
import useFetch from 'hooks/useFetch'
import React from 'react'
import { Link } from 'react-router-dom'
import { FETCH_LISTCOMPONENT } from 'services/api'

const ListComponent = ({ dados }) => {
  const { data, error, request, loading } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const { url, options } = FETCH_LISTCOMPONENT(`/user?id=${dados.id_user}`)
      await request(url, options)
      /* response = await api.get(`/user?id=${dados.id_user}`) */
    })()
  }, [request, dados.id_user])

  if (loading) return <Loading />
  else if (error) return <Erro error={error} />
  else {
    return (
      <div className="bb-black py-4">
        <h6 className="color-gray">{dados.date}</h6>
        <h6 className="uppercase color-primary">{dados.category}</h6>

        <Link className="link-title" to={`/post/${dados.id}`}>
          <h4>{dados.title}</h4>
        </Link>
        <p className="mt-1">{dados.resume}</p>

        <div className="flex-start-row mt-3">
          <div className="profile">
            <img
              src={`${data[0].ImageProfile}`}
              className="profile-img"
              alt="profile img"
            />
          </div>
          <div className="ml-1">
            <h6 className="color-primary">{data[0].name}</h6>
            <h6 className="color-gray">@{data[0].user}</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default ListComponent
