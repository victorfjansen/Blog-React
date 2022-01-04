import React from 'react'
import styles from './Erro.module.css'

const Erro = ({ error }) => {
  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    if (error) setIsActive(true)
    window.scrollTo(0, 0)
  }, [error])

  return (
    <div
      className={`card-warning p-2 my-1 flex-center ${
        isActive && styles.warning
      }`}
    >
      <h6 className="h7 color-yellow">Algo deu errado: {error}</h6>
    </div>
  )
}

export default Erro
