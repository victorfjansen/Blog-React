import React from 'react'

const CardComponent = () => {
  return (
    <div className="grid-4 card p-0">
      <div className="thumb hidden">
        <a href="">
          <img src="img/01.png" alt="Imagem 1" />
        </a>
      </div>
      <div className="mt-2 px-2">
        <h6 className="color-gray">31 DEZ 2021</h6>
        <h6 className="uppercase color-primary">tecnologia</h6>

        <h4>O que esperar do cinema em 2021?</h4>
        <p className="mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque.
        </p>

        <div className="my-3">
          <a href="" className="link color-primary">
            {' '}
            Ler Mais{' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
