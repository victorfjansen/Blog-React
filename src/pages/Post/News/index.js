import Erro from 'Helpers/Erro'
import Loading from 'Helpers/Loading'
import useFetch from 'hooks/useFetch'
import React from 'react'
import { PROFILE_DATA } from 'services/api'

const News = ({ postData }) => {
  const { data, request, loading, error } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const { url, options } = PROFILE_DATA(`/user/${postData.id_user}`)
      await request(url, options)
    })()
  }, [request, postData.id_user])

  if (loading) return <Loading />
  else if (error) return <Erro error={error} />
  else {
    return (
      <div className="row">
        <h6 className="uppercase color-primary text-center">
          {postData.category}
        </h6>
        <h3 className="text-center">{postData.title}</h3>

        <div className="flex-center my-3">
          <div className="profile">
            <img
              src={data.ImageProfile}
              className="profile-img"
              alt="profile "
            />
          </div>
          <div className="ml-2">
            <h6 className="color-primary">
              {data.name} {data.surname}
            </h6>
            <h6 className="color-gray">@{data.user}</h6>
          </div>
          <p className="ml-4">
            {postData.date} - {postData.duration} min read
          </p>
        </div>

        <div className="img-banner hidden">
          <img src={postData.imageUrl} alt="imagem Banner" />
        </div>

        <div className="row my-3">
          <h4>{postData.title}</h4>
          <p className="mt-1">{postData.resume}</p>
        </div>
      </div>
    )
  }
}

export default News
