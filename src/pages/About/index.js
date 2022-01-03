import React from 'react'
import { Link } from 'react-router-dom'
import './LogoAnimation.css'

const About = () => {
  return (
    <section className="container h-100 animeLeft">
      <div className="row mt-6">
        <div className="grid-6">
          <h2 className="h3">
            O que é o Blog <span>?</span>
          </h2>
          <p className="mt-1">
            O Blog é um projeto que foi feito para promover o contato e aumentar
            o interesse sobre tecnologia e games entre pessoas distintas. Venha
            participar também!
          </p>
          <Link to="/login" className="btn mt-4">
            Começar a escrever
          </Link>
        </div>
        <div className="grid-6">
          <svg
            width="269"
            height="326"
            viewBox="0 0 269 326"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="HeroSvg "
          >
            <g id="todo">
              <g id="baixo">
                <path
                  id="Vector 1091"
                  d="M268 196.511C268 282.438 268 324.452 188.236 324.808C187.684 324.811 187.209 324.363 187.209 323.811V277.91C187.209 277.358 187.662 276.91 188.214 276.904C232.931 276.397 267.4 242.075 268 196.511Z"
                  fill="url(#paint0_linear_707_676)"
                  stroke="#0F4A97"
                />
                <path
                  id="Ellipse 312"
                  d="M105.5 197.234C105.5 151.531 141.775 114.5 186.5 114.5C231.225 114.5 267.5 151.531 267.5 197.234C267.5 242.937 231.225 279.968 186.5 279.968C141.775 279.968 105.5 242.937 105.5 197.234Z"
                  fill="url(#paint1_linear_707_676)"
                  stroke="#0F4A97"
                />
              </g>
              <g id="cima">
                <path
                  id="Vector 1091_2"
                  d="M1 129.3C1 43.3727 1 1.35839 80.7639 1.00225C81.3162 0.99978 81.7913 1.44768 81.7913 1.99996V47.9007C81.7913 48.4529 81.3382 48.9001 80.786 48.9064C36.069 49.4136 1.59974 83.736 1 129.3Z"
                  fill="url(#paint2_linear_707_676)"
                  stroke="#0F4A97"
                />
                <path
                  id="Ellipse 312_2"
                  d="M163.5 128.576C163.5 174.279 127.225 211.31 82.5 211.31C37.7748 211.31 1.5 174.279 1.5 128.576C1.5 82.8736 37.7748 45.8423 82.5 45.8423C127.225 45.8423 163.5 82.8736 163.5 128.576Z"
                  fill="url(#paint3_linear_707_676)"
                  stroke="#0F4A97"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_707_676"
                x1="187.209"
                y1="324.811"
                x2="302.912"
                y2="251.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1B69D2" />
                <stop offset="1" stopColor="#07346F" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_707_676"
                x1="105"
                y1="280.468"
                x2="271.431"
                y2="117.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1B69D2" />
                <stop offset="1" stopColor="#07346F" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_707_676"
                x1="81.7913"
                y1="1"
                x2="-33.9116"
                y2="73.8589"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1B69D2" />
                <stop offset="1" stopColor="#07346F" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_707_676"
                x1="164"
                y1="45.3423"
                x2="-2.43121"
                y2="208.306"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1B69D2" />
                <stop offset="1" stopColor="#07346F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default About
