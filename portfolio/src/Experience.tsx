import React from 'react'

const Experience = () => {
  return (
    <div>
    <h1 className="text-2xl font-bold text-center">Experience</h1>
<div className="m-5 flex justify-center">
    
     <div className="max-w-md bg-white rounded-2xl  items-center shadow-lg p-6 border-l-4 border-indigo-600">
      <h3 className="text-xl font-semibold text-gray-800">Software Developer</h3>
      <p className="text-sm text-gray-500">Codetribe • July 2025 – Present</p>
      <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
        <li>Built scalable REST APIs in Node.js and Express.</li>
        <li>Developed front-end with React and Tailwind.</li>
        <li>Improved database queries with PostgreSQL optimization.</li>
      </ul>
    </div> 
</div>


    </div>
  )
}

export default Experience