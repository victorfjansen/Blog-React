import Head from 'Helpers/Head'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="container v-100 h-100 animeLeft">
      <Head title="Não encontrado" />
      <div className="row flex-center">
        <img src="svg/blog-logo2.svg" className="icon-l" alt="" />
      </div>

      <div className="row mt-6">
        <div className="grid-4 disappear"></div>
        <div className="grid-4">
          <h1 className="h0 text-center color-primary">404</h1>
          <h5 className="text-center">Página não encontrada!</h5>
          <p className="text-center mt-1">
            A página que você tá procurando não existe ou foi removida. Clique
            para voltar para o site.
          </p>

          <Link to="/" className="btn w-100 mt-3">
            Voltar p/ home
          </Link>
        </div>
        <div className="grid-4 disappear"></div>
      </div>
    </section>
  )
}

export default NotFound
