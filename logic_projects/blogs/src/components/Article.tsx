import React from 'react'
import { useSelector } from 'react-redux'
import type { Blog } from '../types/blogs';
import ArticleCard from './ArticleCard';

interface ArticleProps {
    onEdit: (Blog: Blog) => void;
}
const Article = (onEdit: ArticleProps) => {
  //Rdedx hook
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {blogs} = useSelector((state:any) => state.blogs);

  return <div className="ml-[5rem]">
    {
    blogs.map((blog: Blog) => (
      <ArticleCard key={blog.id} blog={blog} onEdit={onEdit} onDelete={console.log("delete")} />
    ))

  }</div>;
}

export default Article