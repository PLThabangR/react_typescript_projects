import appleKeyword from "../public/applekeyword.png"
import jobTracker from "../public/jobtrackerUI.png"
import { FaLinkedin, FaNodeJs, FaReact,FaJava  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript , SiJavascript, SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si";

  const techs = [
    { name: "React", icon: <FaReact className="text-sky-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    {name : "Typescript", icon: <SiTypescript className="text-blue-400 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-red-600 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-4xl" /> }
  ];

const Home = () => {
    //#FCFCFC -header  font color
    //#5140D7 -primary color
  return (
    <>
    {/* header */}
<div className="m-5">
<section>
  <div className="flex flex-col justify-center items-center m-2 p-2">
<h1 className="text-5xl font-bold text-gray-900 mt-2 mb-2">Junior <span className="md:bg-gray-900 md:text-white">Software Developer</span></h1>  
<p className="text-2xl mt-2 p-2  text-gray-900"> with hands-on experience in developing <span className="bg-gray-900 text-white font-bold"> web applications using Javascript</span></p>
<p className="text-1xl mt-2 p-2  text-gray-900">focus is on crafting intuitive user interfaces, robust backends, and seamless digital experiences</p>
<div className="flex flex-col gap-2 m-2 p-2 items-center md:flex-row xl:flex-row ">
  <a className="text-1xl "  href="https://www.linkedin.com/in/ttrakgoropo/"><FaLinkedin  className="text-blue-400 text-2xl hover:scale-110 transition-transform"/></a>
<a className="text-1xl"  href="https://github.com/PLThabangR"><FaGithub  className="text-black-400 text-2xl hover:scale-110 transition-transform"/></a>
</div>

</div>
</section>
{/* projects */}
<section>
  <h1 className="text-2xl font-bold text-center  text-gray-900 mb-5 ">Projects</h1> 
<div className="flex flex-col gap-5 m-2  p-2 justify-center items-center md:flex-row xl:flex-row md:flex-wrap xl:flex-wrap ">

 <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  hover:translate-y-2">
      {/* Image */}
      <img
        src={jobTracker}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Job Tracker</h2>
        <p className="text-gray-600 mt-2">
             Job tracking application built with React and TypeScript, powered by <span className="font-bold">Firestore RealtimeDB, Bootstrap And Zustand  </span>for state management with user authentication.
        </p>

        {/* Link */}
        <a
          href="https://velvety-lollipop-4b438a.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Visit Website →
        </a>
      </div>
    </div>

    {/* more cards */}
 <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={appleKeyword}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Store filter</h2>
        <p className="text-gray-600 mt-2">
         A complex data filtering application built with React, TypeScript and state management with react toolkit powerd by <span className="font-bold">Dummy data server, Tailwind and Redux Toolkit </span>
          to filter data based on Side Bar options.

        </p>

        {/* Link */}
        <a
          href="https://deluxe-licorice-5369b6.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Visit Website →
        </a>
      </div>
    </div>
</div>

</section>

{/* experinces */}
<h1 className="text-2xl font-bold text-center text-gray-900 m-5">Experience</h1>
<div className="m-5 flex justify-center">
    
     <div className="max-w-md bg-white rounded-2xl  items-center shadow-lg p-6 border-l-4 border-gray-900">
      <h3 className="text-xl font-semibold text-gray-800">Software Developer</h3>
      <p className="text-sm text-gray-500">Codetribe | Mlab • July 2025 – Present</p>
      <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
        <li>Built scalable REST APIs in Node.js and Express.</li>
        <li>Developed front-end apps with React and Tailwind.</li>
        <li>Improved database queries with PostgreSQL optimization.</li>
      </ul>
    </div> 
</div>





{/* stech stack */}
<section className="flex flex-col justify-center items-center m-2 p-2">
    <h1 className="text-2xl font-bold text-center  text-gray-900 mb-5">Tech stack</h1> 
<div className="xl:w-1/2 bg-white rounded-2xl shadow-lg p-6 ">
     
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            {tech.icon}
            <p className="mt-2 text-sm font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>

</section>

</div>


    </>
  )
}

export default Home