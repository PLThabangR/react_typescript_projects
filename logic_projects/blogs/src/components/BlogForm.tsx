import React, { useState } from 'react'
import type { Blog } from '../types/blogs'



interface BlogForm {
  exitingBlog?: Blog;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setBlog: (blog: Blog) => void;
  handleDelete?: () => void;
  buttonText?: string;
  onClose: () => void;
}

const BlogForm = ({  exitingBlog, handleSubmit, setBlog, handleDelete, onClose,buttonText="Submit" }: BlogForm) => {
 const [title, setTitle] = useState(existingBlog?.title || "");
 const [description, setDescription] = useState(
   existingBlog?.description || ""
 );
 const [image, setImage] = useState(existingBlog?.image || "");
 const [date, setDate] = useState(existingBlog?.date || "");
 const [author, setAuthor] = useState(existingBlog?.author || "");
  return <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{exitingBlog ? "Edit Blog" : "Add Blog"}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" id="title" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter title" onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter description"></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" id="image" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter image URL" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="text" id="date" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter date" />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
            <input type="text" id="author" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter author" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">{buttonText}</button>
            <button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md ml-2">Cancel</button>
</div>
        </form>
      </div>
    </div>
  
  </>;
};

export default BlogForm