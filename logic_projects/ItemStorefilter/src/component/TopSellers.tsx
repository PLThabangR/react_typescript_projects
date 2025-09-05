import { useEffect, useState } from "react"

interface Author{
  name:string,
  image:string,
  isFollow:boolean;
}






const TopSellers = () => {
  const [authors,setAuthers] = useState<Author[]>([])

const handleClickFollow=(index:number)=>{
 
  setAuthers(prevAuthors => (
    prevAuthors.map((author, i) =>
      i === index ? { ...author, isFollow: !author.isFollow } : author
    )
  ));
}




  const fetchAuthors= async()=>{
  try {
    //fetch random users  
    const response =await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();

    //Looping through the user to set the data according to our interface
    const authors = data.results.map((user: any) => ({
      name: `${user.name.first} ${user.name.last}`,
      image: user.picture.medium,
      isFollow: false,
    }));

    setAuthers(authors)
    


  } catch (error) {
    
  }
}

useEffect(()=>{
  fetchAuthors()
},[])
  
  return (
    <>
    
    <div className="bg-white p-5 mx-1 mt-[5rem] border w-[32] rounded  ">

    <h1 className="font-bold text-xl mb-5">Top Sellers</h1>

    <ul>  
       {
          authors.map((author,index)=>(

            <li key={index}className="flex items-center mb-5 justify-between" >
                <div className="flex items-center justify-center">
                  <img src={author.image} alt={author.name} className="w-[20%] h-[20%]  rounded-full" />
                  <div>
                    <p className="ml-4">{author.name}</p>
                 
                  </div>

                </div>

                <button onClick={() => handleClickFollow(index)} className={`bg-black  py-1 px-3 rounded ${author.isFollow ? 'text-white bg-red-500' : 'text-white bg-black'}`} >{author.isFollow ? 'unfollow' : 'Follow'}</button>

            </li>
          ))

       }


    </ul>
    </div>
    
    
    </>
  )
}

export default TopSellers