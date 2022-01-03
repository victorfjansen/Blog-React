import React from 'react'
import imagePeople from '../../profile/jansen.jpg'

const Profile = () => {
  return (
    <>
      <section className="container animeLeft h-100 flex-center">
        <div className="row">
          <div className="grid-6">
            <div className="flex-start-row">
              <div className="profile-big">
                <img src={imagePeople} className="profile-img" alt="profile " />
              </div>
              <div className="ml-3">
                <h3>Victor Jansen</h3>
                <h6 className="color-gray">@victorfjansen</h6>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              illum, molestiae perferendis adipisci
            </p>
          </div>
          <div className="grid-6 flex-center">
            <a href="#" className="btn">
              Meus Dados
            </a>
            <a href="#" className="btn ml-3">
              Adicionar Post
            </a>
          </div>
        </div>
      </section>

      <section className="container">
        <h3>Adicionar um novo post</h3>
        <p className="mt-1">
          preencha os campos abaixo para poder adicionar um novo post ao blog.
        </p>

        <form>
          <div className="row">
            <div className="grid-3 p-0">
              <label htmlFor="date">
                <h6>Data</h6>
              </label>
              <input type="date" id="date" name="date" className="mt-1" />
            </div>
            <div className="grid-3 p-0">
              <label htmlFor="categoria">
                <h6>Categoria</h6>
              </label>
              <select id="categoria" name="categoria" className="mt-1">
                <option value="tecnologia">tecnologia</option>
                <option value="cinema">cinema</option>
                <option value="games">games</option>
                <option value="fotografia">fotografia</option>
              </select>
            </div>
            <div className="grid-6 p-0">
              <label htmlFor="title">
                <h6>Título</h6>
              </label>
              <input type="text" id="title" name="title" className="mt-1" />
            </div>
          </div>

          <div className="row">
            <div className="grid-9 p-0">
              <label htmlFor="resumo">
                <h6>Resumo do post</h6>
              </label>
              <input type="text" id="resumo" name="resumo" className="mt-1" />
            </div>
            <div className="grid-3 p-0">
              <label htmlFor="duracao">
                <h6>Duração</h6>
              </label>
              <select id="duracao" name="duracao" className="mt-1">
                <option value="" disabled>
                  Options
                </option>
                <option value="5min">5min</option>
                <option value="10min">10min</option>
                <option value="15min">15min</option>
                <option value="20min">20min</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="grid-12">
              <label htmlFor="conteudo">
                <h6>Conteúdo</h6>
              </label>
              <textarea
                style={{ resize: 'none' }}
                name="conteudo"
                id="conteudo"
                className="w-100"
                rows="10"
              ></textarea>
            </div>
          </div>

          <div className="row flex-end-row">
            <button className="btn mr-2">Adicionar</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile
