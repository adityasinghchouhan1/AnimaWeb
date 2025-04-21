import React, { useState } from 'react'

const Button = ({ Onclick, color, title }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    Onclick() // run the original click handler
    setTimeout(() => setIsClicked(false), 300) // remove pulse after animation
  }

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        style={{ backgroundColor: color }}
        className={`text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg relative overflow-hidden ${
          isClicked ? 'animate-pingOnce' : ''
        }`}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
