
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
        src={"data:image/png;base64,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"}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Quick cart App</h2>
        <p className="text-gray-600 mt-2">
          This is a web service with MVC archictecture that implement the server-side logic using <span className="font-bold">Springboot,JPA and MySQL</span> to perform CRUD operations on the database table.
       
        </p>

        {/* Link */}
        <a
          href="https://github.com/PLThabangR/Javascript_Spring-boot_CRUD_on_Quick-cart/tree/main/BackEnd/src/main/java/com/example/crud/shopping/cart/product"
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