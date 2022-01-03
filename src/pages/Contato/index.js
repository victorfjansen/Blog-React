import { ReactComponent as InstaIcon } from '../../svg/icon-instagram.svg'

const Contact = () => {
  function onSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="container animeLeft">
      <div className="row">
        <div className="grid-6">
          <h3>Entre em contato</h3>
          <p>
            Aqui você conseguirá entrar em contato comigo. Mande sua mensagem!
          </p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              className="mt-2"
              placeholder="Nome"
            />
            <input
              type="email"
              name="email"
              className="mt-2"
              placeholder="E-mail"
            />
            <textarea
              name="content"
              rows="8"
              className="mt-2"
              placeholder="Mensagem"
              style={{ resize: 'none' }}
            ></textarea>
            <button className="btn mt-2">Enviar</button>
          </form>
        </div>
        <div className="grid-1 disappear"></div>
        <div className="grid-5">
          <h5 className="mt-4">Algumas informações</h5>

          <h6 className="color-primary mt-4">Info.</h6>
          <p>Projeto Blog. em React.js desenvolvido por Victor Jansen</p>

          <h6 className="color-primary mt-4">E-mail</h6>
          <p>victorfjansen@gmail.com</p>

          <h6 className="color-primary mt-4">Redes sociais</h6>
          <div className="mt-2 flex-start-row">
            <a
              href="https://www.instagram.com/victor_fjansen/"
              target="_blank"
              rel="noreferrer"
            >
              <InstaIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
