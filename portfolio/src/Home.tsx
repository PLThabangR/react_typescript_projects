

const Home = () => {
    //#FCFCFC -header  font color
    //#5140D7 -primary color
  return (
    <>
<div className="m-5">
<section>
  <div className="flex flex-col justify-center items-center m-2 p-2">
<h1 className="text-5xl font-bold">Software Developer</h1>  
<p className="text-1xl"> with hands-on experience in developing web applications using React and Node.js</p>

</div>
</section>
<section  className="m-5 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"> 
  <h1 className="text-2xl font-bold text-center">Experience</h1> 
  <div className="flex flex-col justify-center items-center md:flex-row xl:flex-row">
     
    <p className="text-1xl">with hands-on experience in developing web applications using React and Node.js</p>
    <img src="https://images.unsplash.com/photo-1495462911434-be47104d70fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className="w-1/4 bg-cover " alt="company logo" />


  </div>
</section>


</div>


    </>
  )
}

export default Home