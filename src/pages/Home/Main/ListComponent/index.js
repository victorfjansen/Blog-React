import React from 'react'

const ListComponent = () => {
  return (
    <div className="bb-black py-4">
      <h6 className="color-gray">31 DEZ 2021</h6>
      <h6 className="uppercase color-primary">tecnologia</h6>

      <h4>O que esperar do cinema em 2021?</h4>
      <p className="mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
        pharetra ut ac, pellentesque.
      </p>

      <div className="flex-start-row mt-3">
        <div className="profile">
          <img
            src="profile/jansen.jpg"
            className="profile-img"
            alt="profile img"
          />
        </div>
        <div className="ml-1">
          <h6 className="color-primary">Victor Jansen</h6>
          <h6 className="color-gray">@victorfjansen</h6>
        </div>
      </div>
    </div>
  )
}

export default ListComponent
