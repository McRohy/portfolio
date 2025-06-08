import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Contact() {
  return (
    <div id="Contact" 
        className="h-[40vh] py-10 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-5xl text-white mb-6">Contact</h2>
    
      <div className="flex gap-10 text-4xl text-white">
        <a href="mailto:matej.rohac24@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 hover:scale-125 transform transition-transform duration-300">
          <FaEnvelope />
        </a>
        <a href="https://github.com/McRohy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 hover:scale-125 transform transition-transform duration-300">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/matej-roh%C3%A1%C4%8D-826510333/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-125 transform transition-transform duration-300">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/matroh24/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transform transition-transform duration-300">
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}

export default Contact
