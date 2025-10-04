import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

interface PeopleToFollow {
    name:string
    following:boolean
}
const USerCard = ({name,following}:PeopleToFollow) => {
  return (
    <div className='flex justify-between items-center'>
        <section className='flex items-center '>
        <FaUserCircle className='text-3xl text-gray-500'/>
        <span className='ml-2'>{name}</span>
        </section>
        <button className='bg-black text-white rounded-full px-4 py-2'>{following?"Following":"Follow"}</button>
    </div>
  )
}

export default USerCard