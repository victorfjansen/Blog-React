import Header from './pages/Header'
import Footer from './pages/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Import components

import Home from './pages/Home'
import Contato from 'pages/Contato'
import About from 'pages/About'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import Post from 'pages/Post'
import Profile from 'pages/Profile'
import Search from 'pages/Search'
import React from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/post/:idPost" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
