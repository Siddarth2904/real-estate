import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Signout from './pages/Signout'
import Signin from './pages/Signin'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="signout" element={<Signout />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}
