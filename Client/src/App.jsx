import React from 'react'
import Navbar from '../src/Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import ScrollToTop from './Component/ScrollToTop' // 👈 import it

const App = () => {
  return (
    <div className="relative min-h-screen">
      <ScrollToTop /> {/* 👈 add this before rendering routes */}
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
