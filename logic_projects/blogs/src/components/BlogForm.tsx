import React, { useState } from 'react'
import type { Blog } from '../types/blogs'
import { useDispatch, useSelector } from 'react-redux'


interface BlogForm {
    blog: Blog,
    
    onClose: () => void
}

const BlogForm = ({ exitingBlog, onClose }: BlogForm) => {

  return <></>;
};

export default BlogForm