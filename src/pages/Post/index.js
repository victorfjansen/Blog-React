import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from 'hooks/useFetch'
import { POST_GET } from 'services/api'
import Loading from 'Helpers/Loading'
import Erro from 'Helpers/Erro'
import News from './News'
import PersonData from './PesonData'

const Post = () => {
  const { idPost } = useParams()
  const { data, request, loading, error } = useFetch()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    ;(async () => {
      const { url, options } = POST_GET(`/posts/${idPost}`)
      await request(url, options)
    })()
  }, [request, idPost])

  console.log(data)

  if (loading) return <Loading />
  else if (error) return <Erro error={error} />
  else {
    return (
      <section className="container animeLeft">
        <News postData={data} />
        <PersonData postData={data} />
      </section>
    )
  }
}

export default Post
