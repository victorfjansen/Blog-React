import React from 'react'
import { Link } from 'react-router-dom'

const CardComponent = ({ data }) => {
  console.log(data)
  return (
    <div className="grid-4 card p-0">
      <div className="thumb hidden">
        <Link to={`/post/${data.id}`}>
          <img src={`${data.imageUrl}`} alt="Imagem 1" />
        </Link>
      </div>
      <div className="mt-2 px-2">
        <h6 className="color-gray">{data.date}</h6>
        <h6 className="uppercase color-primary">{data.category}</h6>

        <h4>{data.title}</h4>
        <p className="mt-1">{data.resume}</p>

        <div className="my-3">
          <Link to={`/post/${data.id}`}>Ler Mais</Link>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
