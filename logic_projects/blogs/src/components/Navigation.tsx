import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className='flex justify-between  items-center border-2 text-black p-4 border-gray-200'>
        <div className='flex iteems-center border-2 rounded-full px-2 max-w-md ml-[5rem]'>
                <FaSearch/>
        </div>


    </nav>
  )
}

export default Navigation

