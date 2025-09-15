import React from 'react'

const Nav = () => {
  return (
    <div>
 <div className="flex justify-between items-center h-full bg-amber-300   m-5 p-4">
    <div>
      <h1 className="text-3xl font-bold underline">
        Home 
      </h1>
    </div>


     <div className='flex space-x-4'>
      <h1 className="text-3xl font-bold underline">
        Projects
      </h1>

      <h1 className="text-3xl font-bold underline">
        Experinces
      </h1>
      <h1 className="text-3xl font-bold underline">
        Sevices
      </h1>
     
    </div>
  </div>


    </div>
  )
}

export default Nav