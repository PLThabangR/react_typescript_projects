

const Experience = () => {
  return (
    <div>
<h1 className="text-2xl font-bold text-center text-gray-900 m-5">Experience</h1>
<div className="m-5 flex justify-center gap-5 flex-wrap ">
    
     <div className="max-w-md bg-white rounded-2xl  items-center shadow-lg p-6 border-l-4 border-gray-900">
      <h3 className="text-xl font-semibold text-gray-800">Software Developer</h3>
      <p className="text-sm text-gray-500">Codetribe | Mlab • July 2025 – Present</p>
      <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
        <li>Built scalable REST APIs in Node.js and Express.</li>
        <li>Developed front-end apps with React and Tailwind.</li>
        <li>Improved database queries with PostgreSQL optimization.</li>
      </ul>
    </div> 

      <div className="max-w-md bg-white rounded-2xl  items-center shadow-lg p-6 border-l-4 border-gray-900">
      <h3 className="text-xl font-semibold text-gray-800">Full Stack Developer</h3>
      <p className="text-sm text-gray-500">Web Development bootcamp | Mlab • April 2025 – June 2025</p>
      <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
        <li>Completed an intensive bootcamp focusing on  JavaScript, Html, Css and Node.js.</li>
        <li>Built multiple front-end and full-stack projects, applying modern best practices.</li>
        <li>Improved database queries with PostgreSQL optimization.</li>
      </ul>
    </div> 

    {/* plumblink */}

    {/* da */}
     <div className="max-w-md bg-white rounded-2xl  items-center shadow-lg p-6 border-l-4 border-gray-900">
      <h3 className="text-xl font-semibold text-gray-800">Software Developer</h3>
      <p className="text-sm text-gray-500">The Digital Academy | Sharper • Feb 2019 – March 2020</p>
      <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
        <li>Collaborated in an Agile development team to deliver a real-world web application ("Quick CV") aimed at simplifying CV creation for job seekers.</li>
        <li>Developed dynamic user interfaces using Angular, JavaScript, and TypeScript, ensuring responsiveness and a smooth user experience.</li>
       
      </ul>
    </div> 

    {/* embizo */}
     <div className="max-w-md bg-white rounded-2xl  items-center shadow-lg p-6 border-l-4 border-gray-900">
      <h3 className="text-xl font-semibold text-gray-800">Android Developer intern</h3>
      <p className="text-sm text-gray-500">E mbizo Solutions• Jun 2018 – Oct 2018</p>
      <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
        <li>Gained valuable insight into the mobile development lifecycle, debugging techniques, and user-centered design.
</li>
        <li>Assisted in the development of an Android mobile app using Java and Android SDK, aimed at providing customers with prepaid Wi-Fi voucher functionality.
</li>
        
      </ul>
    </div> 
</div>




    </div>
  )
}

export default Experience