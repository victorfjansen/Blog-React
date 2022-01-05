import React from 'react'
import { ReactComponent as StarIcon } from 'svg/icon-star.svg'

const MoreVoted = () => {
  return (
    <>
      <div className="grid-5 pt-5 pb-3">
        <StarIcon className="icon-l" />
        <h3 className="mt-2">Os melhores e mais bem vistos posts do mês</h3>

        <p className="mt-1">
          Confira os posts mais famosos do mês! Aproveite para se atualizar e
          participar de cada Post!
        </p>
      </div>
    </>
  )
}

export default MoreVoted
