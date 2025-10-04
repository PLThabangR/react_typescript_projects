import React from 'react'
import { FaSearch, FaUserCircle } from "react-icons/fa";

/**
 * A navigation component that renders a search bar and a border.
 * It uses the `flex` class to justify the content between the search bar and the border.
 * The search bar is also a `flex` item which contains a `FaSearch` icon and an `input` element.
 * The `input` element has the `outline-none` class to remove the outline and the `w-full` class to make it full width.
 * The `bg-transparent` class is used to make the background of the `input` element transparent.
 * The `max-w-md` class is used to set the maximum width of the search bar to the maximum width of the device.
 * The `ml-[5rem]` class is used to add a margin left to the search bar.
 */
const Navigation = () => {
  return (
    <nav className='flex justify-between  items-center border-2 text-black p-4 border-gray-200'>
        <div className='flex items-center border-2 rounded-full px-2 max-w-md ml-[5rem]'>
                <FaSearch/>
                <input type="text" placeholder='Search...' className='outline-none w-full bg-transparent'/>
        </div>

    <section className='flex items-center mr-[5rem]'>
        <FaUserCircle className='text-2xl'/>
    </section>

    </nav>
  )
}

export default Navigation

