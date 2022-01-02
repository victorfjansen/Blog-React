import React from 'react'
import img from '../../../img/07.png'

const Banner = ({ banner }) => {
  const bannerData = banner[0]
  return (
    <section className="container">
      <div className="img-banner hidden">
        <img src={bannerData.imageUrl} alt="Banner" />
      </div>
      <div className="row mt-3">
        <h6 className="color-gray text-center">{bannerData.date}</h6>
        <h6 className="uppercase color-primary text-center">
          {bannerData.category}
        </h6>

        <h4 className="text-center">{bannerData.title}</h4>
        <p className="mt-1 text-center">{bannerData.resume}</p>

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
