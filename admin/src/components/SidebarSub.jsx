import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

const SidebarSub = () => {
  const [isOpen, setisOpen] = useState(false)

  const ToggleButton = () => {
    setisOpen(!isOpen)
  }
  return (
    <>
      <div className="flex h-screen bg-gray-400">
        <aside
          className={` ${
            !isOpen ? 'w-64' : 'w-16'
          } bg-teal-500 h-full fixed transition-all duration-300  border-blue-700 border-r-2`}
        >
          <div className="flex flex-col justify-center items-center">
            {!isOpen && (
              <div className="py-10 text-3xl font-semibold w-full text-center border-b-4 border-blue-600">
                Admin
              </div>
            )}
            <button onClick={ToggleButton}>
              <FaBars size={20} />
            </button>
          </div>
          1
          <nav className="mt-8">
            <Link to="contect">{!isOpen && <span>Contect</span>}</Link>
          </nav>
        </aside>
        <div>
          <main
            className={`${
              isOpen ? 'ml-16' : 'ml-60'
            } flex-grow h-[100vh] transition-all duration-300 `}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default SidebarSub
