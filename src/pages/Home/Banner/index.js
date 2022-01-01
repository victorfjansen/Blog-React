import React from 'react'
import img from '../../../img/07.png'

const Banner = () => {
  return (
    <section className="container">
      <div className="img-banner hidden">
        <img src={img} alt="Banner" />
      </div>
      <div className="row mt-3">
        <h6 className="color-gray text-center">31 DEZ 2021</h6>
        <h6 className="uppercase color-primary text-center">tecnologia</h6>

        <h4 className="text-center">O que esperar do cinema em 2021?</h4>
        <p className="mt-1 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque.
        </p>

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
