import React from 'react'
import { ReactComponent as StarIcon } from 'svg/icon-star.svg'

const MoreVoted = () => {
  return (
    <>
      <div className="grid-5 pt-5 pb-3">
        <StarIcon className="icon-l" />
        <h3 className="mt-2">Os melhores e mais bem votados posts do mês</h3>

        <p className="mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet
        </p>
      </div>
    </>
  )
}

export default MoreVoted
