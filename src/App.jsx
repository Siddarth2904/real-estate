import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import About from './components/About'
import Signout from './components/Signout'
import Signin from './components/Signin'

export default function App() {
  return (
    <BrowserRouter>
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
