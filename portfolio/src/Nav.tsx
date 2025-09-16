import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold">TR IT</h1>

        {/* Desktop Menu  this will be hidden in small devices*/}
        <ul className="hidden md:flex space-x-6">
           <Link to="/home">
           <li className="block hover:text-indigo-400">Home</li>
          </Link>
           <Link to="/experience">
           <li className="block hover:text-indigo-400">Experience</li>
          </Link>
          <Link to="/projects">
           <li className="block hover:text-indigo-400"> Projects</li>
          </Link>
           <Link to="/services">
           <li className="block hover:text-indigo-400"> Services</li>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icon fa time is a close icon X and fa bars is a menu icon */}
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu  md:is hidden in small devices*/}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 bg-gray-800 p-4 rounded-lg">
          <Link to="/home">
           <li className="block hover:text-indigo-400">Home</li>
          </Link>
           <Link to="/experience">
           <li className="block hover:text-indigo-400">Experience</li>
          </Link>
          <Link to="/projects">
           <li className="block hover:text-indigo-400"> Projects</li>
          </Link>
           <Link to="/services">
           <li className="block hover:text-indigo-400"> Services</li>
          </Link>


         
        </ul>
      )}
    </nav>

    </>
  )
}

export default Nav