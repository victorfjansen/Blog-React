import Erro from 'Helpers/Erro'
import Loading from 'Helpers/Loading'
import useFetch from 'hooks/useFetch'
import React from 'react'
import { PROFILE_DATA } from 'services/api'

const PersonData = ({ postData }) => {
  const { data, request, error, loading } = useFetch()

  React.useEffect(() => {
    ;(async () => {
      const { url, options } = PROFILE_DATA(`/user/${postData.id_user}`)
      await request(url, options)
    })()
  }, [request, postData.id_user])

  console.log(data)
  if (loading) return <Loading />
  else if (error) <Erro error={error} />
  else {
    return (
      <div className="row">
        <div className="grid-3 disappear"></div>
        <div className="grid-6 card">
          <div className="row">
            <div className="grid-3 flex-center pl-1">
              <div className="profile-big">
                <img
                  src={data.ImageProfile}
                  className="profile-img"
                  alt="profile "
                />
              </div>
            </div>
            <div className="grid-9">
              <h6 className="color-primary">
                {data.name} {data.surname}
              </h6>
              <h6 className="color-gray">{data.username}</h6>
              <p className="mt-1">{data.description}</p>
            </div>
          </div>
        </div>
        <div className="grid-3 disappear"></div>
      </div>
    )
  }
}

export default PersonData
