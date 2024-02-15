import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Signout from './pages/Signout'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signout" element={<Signout />} />
        <Route path="signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route >
      </Routes>
    </BrowserRouter>
  )
}
