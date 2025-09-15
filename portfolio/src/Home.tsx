import appleKeyword from "../public/applekeyword.png"

const Home = () => {
    //#FCFCFC -header  font color
    //#5140D7 -primary color
  return (
    <>
    {/* header */}
<div className="m-5">
<section>
  <div className="flex flex-col justify-center items-center m-2 p-2">
<h1 className="text-5xl font-bold">Software Developer</h1>  
<p className="text-2xl mt-2 p-2"> with hands-on experience in developing web applications using Javascript</p>

<div className="flex flex-col gap-2 m-2 p-2 items-center md:flex-row xl:flex-row ">
  <p className="text-1xl">linkedin</p>
<p className="text-1xl">Github</p>
</div>

</div>
</section>
{/* projects */}
<section>
  <h1 className="text-2xl font-bold text-center">Projects</h1> 
<div className="flex flex-col gap-5 m-2  p-2 justify-center items-center md:flex-row xl:flex-row md:flex-wrap xl:flex-wrap ">

 <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={appleKeyword}
        alt="Card"
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          This is a short description of the card content. You can use it to
          explain what the card is about.
        </p>

        {/* Link */}
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Visit Website →
        </a>
      </div>
    </div>

    {/* more cards */}
 <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300   hover:scale-100">
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
         A simple Data filtering application built with React, TypeScript and state management with react toolkit.

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


</div>


    </>
  )
}

export default Home