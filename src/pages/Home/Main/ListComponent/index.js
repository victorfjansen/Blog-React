import React from 'react'
import api from 'services/api'

const ListComponent = ({ data }) => {
  const [user, setUser] = React.useState({})

  React.useEffect(() => {
    ;(async () => {
      let response
      try {
        response = await api.get(`/user?id=${data.id_user}`)
        setUser(response.data[0])
      } catch {
        window.alert('algo deu Errado, tente novamente mais tarde')
      }
    })()
  }, [data.id_user, data])

  console.log(data)

  if (user.name) {
    return (
      <div className="bb-black py-4">
        <h6 className="color-gray">{data.date}</h6>
        <h6 className="uppercase color-primary">{data.category}</h6>

        <h4>{data.title}</h4>
        <p className="mt-1">{data.resume}</p>

        <div className="flex-start-row mt-3">
          <div className="profile">
            <img
              src={`${user.ImageProfile}`}
              className="profile-img"
              alt="profile img"
            />
          </div>
          <div className="ml-1">
            <h6 className="color-primary">{user.name}</h6>
            <h6 className="color-gray">@{user.user}</h6>
          </div>
        </div>
      </div>
    )
  } else {
    return <p>Carregando...</p>
  }
}

export default ListComponent
