import React, { use, useEffect, useState } from 'react'
import type { Blog } from '../types/blogs'

//import blogs hooks
import { useDispatch,useSelector } from 'react-redux';
import { addBlog,updateBlog } from '../app/features/blogSlice';





interface BlogForm {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm = ({  existingBlog,onClose  }: BlogForm) => {
//Redux state intances
const dispatch = useDispatch()


//create form state
 const [title, setTitle] = useState(existingBlog?.title || "");
 const [description, setDescription] = useState(existingBlog?.description || "");
 const [image, setImage] = useState(existingBlog?.image || "");
 const [date, setDate] = useState(existingBlog?.date || "");
 const [author, setAuthor] = useState(existingBlog?.author || "");

 //set form state when page loads
useEffect(() => {
  if (existingBlog) {
    setTitle(existingBlog.title);
    setDescription(existingBlog.description);
    setImage(existingBlog.image);
    setDate(existingBlog.date);
    setAuthor(existingBlog.author);
  }
}, [existingBlog]);

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {existingBlog ? "Edit Blog" : "Add Blog"}
        </h3>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              id="title"
              className="block px-4 py-2 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="block px-4 py-2 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>
          <div>
            <input
              type="text"
              id="image"
              className="block px-4 py-2 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <input
              type="text"
              id="date"
              className="block px-4 py-2 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter date"
            />
          </div>
          <div>
            <input
              type="text"
              id="author"
              className="block px-4 py-2 border border-gray-300 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              buttonText
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogForm