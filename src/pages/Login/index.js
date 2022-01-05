import React from 'react'
import { ReactComponent as LogoLogin } from '../../svg/blog-logo2.svg'

const Login = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="container w-100 h-100 animeLeft">
      <div className="row pt-4">
        <div className="grid-4 disappear"></div>
        <div className="grid-4">
          <div className="flex-center">
            <LogoLogin />
          </div>

          <h5 className="text-center">Olá, faça login para continuar.</h5>

          <form action="">
            <input
              type="text"
              name="user"
              placeholder="Digite seu usuário"
              className="mt-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              className="mt-2"
            />
            <button className="btn w-100 mt-4">Entrar</button>
          </form>
        </div>
        <div className="grid-4 disappear"></div>
      </div>
    </section>
  )
}

export default Login
