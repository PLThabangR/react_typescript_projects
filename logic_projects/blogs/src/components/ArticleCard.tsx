import React from 'react'
import type { Blog } from '../types/blogs'

interface ArticleCardProps {
articles:Blog,
onEdit: (blog: Blog) => void,
onDelete: (id: number) => void
}
const ArticleCard = ({articles,onEdit,onDelete}:ArticleCardProps) => {
  return (
    <div className='flex p-4 bg-white rounded-lg shadow-lg w-[40rem] mb-6 ml-[2rem]
    hover:shadow-xl transition-shadow duration-300 ease-in-out'>
        <div className='w-[30rem]'>
            <img src={articles.image} alt={articles.title} className='w-full h-[20rem] object-cover rounded-lg' />
        </div>

    </div>
  )
}

export default ArticleCard