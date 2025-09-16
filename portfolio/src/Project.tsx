
import appleKeyword from "../public/moredetails.png"
import jobTracker from "../public/jobtracker.png"
import weather from "../public/darktheme_weath.png"
import shoppinglistUI from "../public/home_page.png"
import vaultUI from "../public/links.png"
import movieUI from "../public/MovieUI.png"
import quickCV from "../public/quickcv.png"
import trfinance from "../public/fm.png"
import art from "../public/art.png"
import coffee from "../public/coffee.png"



const Project = () => {
  return (
    <>
    <section>
  <h1 className="text-2xl font-bold text-center">Projects</h1> 
<div className="flex flex-col gap-5 m-2  p-2 justify-center items-center md:flex-row xl:flex-row md:flex-wrap xl:flex-wrap ">
    {/* Job Tracker */}
 <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300  hover:translate-y-2">
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
{/* End of job tracker */}
    {/* Store filter*/}
 <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
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

    {/* End of store filter */}

    {/* third project weather */}
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={weather}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Weather Forecast</h2>
        <p className="text-gray-600 mt-2">
         Weather application built with React, TypeScript and state management with Redux powerd by <span className="font-bold">Open Weather api </span>.
        .This app provides real-time weather forecasts for current user location.
        </p>

        {/* Link */}
        <a
          href="https://weather-app-brown-kappa-92.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Visit Website →
        </a>
      </div>
    </div>

    {/* End of weather app */}
    {/* shopping list */}

    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={shoppinglistUI}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Shopping list</h2>
        <p className="text-gray-600 mt-2">
         A beautiful shopping list application with user authentication built with React, TypeScript and state management with <span className="font-bold">Redux toolkit</span> powerd by <span className="font-bold">Json Server and Tailwind </span>.
          Users can search, add, update and remove items from the list.
        </p>

        {/* Link */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
        In progress →
        </a>
      </div>
    </div>
    {/* End of shopping list */}

    {/* vault */}
    
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={vaultUI}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Vault</h2>
        <p className="text-gray-600 mt-2">
         A simple crud application built with React, TypeScript and react hooks for state management  powerd by <span className="font-bold">local storage and plain css </span>.
        Users can search add, update and remove items from the list .
        </p>

        {/* Link */}
        <a
          href="https://react-crud-b479gvij3-plthabangrs-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Visit Website →
        </a>
      </div>
    </div>
{/* end of vault */}
    {/* Movie app */}

    <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={movieUI}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Movie App</h2>
        <p className="text-gray-600 mt-2">
         Complex application built with React, TypeScript  powerd by <span className="font-bold">Express, RTK Query, MongoDB and Tailwind </span>.
         User and Admin authentication is implemented with advanced features like pagination, search, sorting and filtering.

        </p>

        {/* Link */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          In Progress →
        </a>
      </div>
    </div>
{/* end of Movie app */}
    {/* Quick cv */}
    <div className="max-w-md bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={quickCV}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Quick CV</h2>
        <p className="text-gray-600 mt-2">
         A user friendly application built with Angular, TypeScript and state is fetch from backend <span className="font-bold">Spring boot,My SQL and MDB bootstrap </span>.
        Users can create cv with form editor and view changes immediately then choose theme and download as pdf
        </p>

        {/* Link */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          No webiste copyright →
        </a>
      </div>
    </div>
    {/* end of Quick cv */}

    {/*  */}

<div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={trfinance}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Finance managament</h2>
        <p className="text-gray-600 mt-2">
         A fullstack application built with React, TypeScript and state management with Context api powerd by <span className="font-bold">Express, MongoDB, GoogleAuth, Bootstrap </span>.
          Users can create and manage their finances.
        </p>

        {/* Link */}
        <a
          href="https://trfinanceplatformjhb.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Visit Website →
        </a>
      </div>
    </div>

    {/* coffee */}
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={coffee}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Coffee shop</h2>
        <p className="text-gray-600 mt-2">
         User-friendly landing page developed with<span className="font-bold"> HTML and Tailwind CSS</span>, demonstrating the creation of a clean, responsive, and visually engaging interface.

        </p>

        {/* Link */}
        <a
          href="https://devspark-coffee-409a26.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Visit Website →
        </a>
      </div>
    </div>

    {/* still mopre */}
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:translate-y-2">
      {/* Image */}
      <img
        src={art}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Art Landing page</h2>
        <p className="text-gray-600 mt-2">
         User friendly UI landing page built with HTML, powered by <span className="font-bold"> Tailwind css </span>.
        This page demonstrates the use of Tailwind CSS to create a visually appealing and responsive user interface for a website.
        </p>

        {/* Link */}
        <a
          href="https://superb-kheer-167dde.netlify.app/"
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
    
    </>
  )
}

export default Project