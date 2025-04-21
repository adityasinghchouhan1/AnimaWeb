import React from 'react'
import Navbar from '../src/Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
