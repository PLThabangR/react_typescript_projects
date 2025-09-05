import { MessageCircle, ThumbsUp } from 'lucide-react'
import React from 'react'

const PopularBlogs = () => {
  const blogs = [
    {
      title:"title1",
      author:"author1",
      likes:20,
      comments:10,

    },
    {
      title:"title2",
      author:"author2",
      likes:40,
      comments:17,

    },
    {
      title:"title3",
      author:"author3",
      likes:120,
      comments:50,}
  ]

  return (
    <div className='bg-white p-5 w-[23rem] mt-4 border ml-5 rounded '>

      <h2 className='font-bold text-xl mb-5'>Popular Blogs</h2>
        <ul>
          {blogs.map((blog,index) => (
            <li key={index} className='mb-4'>
             <div className='flex justify-between items-center'>
               <h3 className='font-bold mb-2'>{blog.title}</h3>
               </div>
              <p className='text-gray-600'>Author: {blog.author}</p>
              <span  className='flex items-center mt-2 '>
                    <MessageCircle  size={16}/>
                    <span className=' text-gray-500 mr-5 ml-1'>{blog.comments}</span>

                      <ThumbsUp   size={16}/>
                    <span className=' text-gray-500 mr-5 ml-1'>{blog.likes}</span>
              </span>

             
            </li>
          ))}

        </ul>

    </div>
  )
}

export default PopularBlogs