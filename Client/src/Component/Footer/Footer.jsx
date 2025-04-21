import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center sm:flex-row flex-col gap-5 shadow-[0_0_20px_4px_rgba(246,79,49,1)] p-5 px-8 bg-black text-white">
        {/* Left Section */}
        <div className="flex flex-col max-w-sm text-center sm:text-left">
          <h1 className="text-base font-bold mb-2">ABCDEF Website</h1>
          <p className="text-xs text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col text-center sm:text-left">
          <div className="text-sm mb-1">Contact Number: ##########</div>
          <div className="text-sm">Email: ABCD78@gmail.com</div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center sm:items-start text-white">
          <div className="text-sm font-serif font-bold mb-2">
            Our Social Media Handle
          </div>
          <div className="flex gap-3 text-xl">
            <a
              href="#"
              className="hover:text-[#3b5998] transition-all duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-[#1DA1F2] transition-all duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-[#E1306C] transition-all duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#0077B5] transition-all duration-200"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
