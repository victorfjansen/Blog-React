import React from 'react'
import { Link } from 'react-router-dom'
import './LogoHeader.css'
const Header = () => {
  return (
    <>
      <header className="px-2 py-1">
        <nav>
          <div className="logo">
            <Link to="/">
              <svg
                width="38"
                height="49"
                viewBox="0 0 38 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="headerSvg"
              >
                <g id="Group 5194">
                  <path
                    id="Vector 1091"
                    d="M1 30.1233C1 10.9023 1 1.36115 18.3266 1.01005C18.8788 0.998866 19.3391 1.44771 19.3391 1.99999V10.8732C19.3391 11.4254 18.8908 11.8705 18.3392 11.8981C8.56648 12.3885 1.13267 20.0443 1 30.1233Z"
                    fill="url(#paint0_linear_88_1864)"
                    stroke="#3171C9"
                  />
                  <path
                    id="Ellipse 312"
                    d="M37.5 29.959C37.5 40.1275 29.4313 48.3526 19.5 48.3526C9.56875 48.3526 1.5 40.1275 1.5 29.959C1.5 19.7905 9.56875 11.5654 19.5 11.5654C29.4313 11.5654 37.5 19.7905 37.5 29.959Z"
                    fill="url(#paint1_linear_88_1864)"
                    stroke="#3171C9"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_88_1864"
                    x1="6.47792"
                    y1="0.222092"
                    x2="12.8451"
                    y2="19.982"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5390E3" />
                    <stop offset="1" stopColor="#1357B3" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_88_1864"
                    x1="35.3571"
                    y1="14.5006"
                    x2="3.70607"
                    y2="45.7325"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5390E3" />
                    <stop offset="1" stopColor="#1357B3" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="sobre">Sobre</Link>
            </li>
            <li>
              <Link to="contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="bx"></div>

        <div className="flex-start-row">
          <div className="search">
            <form className="flex">
              <input type="text" name="search" placeholder="Buscar" />
              <button className="btn-search"></button>
            </form>
          </div>
          <div className="cta-desktop ml-3">
            <Link to="login" className="btn">
              Login
            </Link>
          </div>
          <div className="cta-mobile">
            <Link to="login">Login</Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="sobre" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="contato" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 px-2">
              <form className="flex">
                <input type="text" name="search" placeholder="Buscar" />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
