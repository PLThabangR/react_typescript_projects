
import { IoMdAddCircle } from 'react-icons/io'
import './App.css'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TopicList from './components/TopicList'
import TrendzList from './components/TrendzList'
import { useState } from 'react'
import type { Blog } from './types/blogs'
import BlogModal from './components/BlogModal'
import BlogForm from './components/BlogForm'
import { useDispatch, useSelector } from 'react-redux'



function App() {
  //State
  //Open modal
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Blog to be edited
  const [editingBlog, setIsEditingBlog] = useState<Blog | null>(null);

  //Rdedx hook
  const dispatch = useDispatch();
  const { blog } = useSelector((state: any) => state.blogs);
  //Functions

  const openModalForNewBlog = () => {
    setIsOpen(true);
    setIsEditingBlog(null);
  };

  const openModalForEdidting = () => {
    setIsOpen(true)
    setIsEditingBlog(blog)
  }

  return (
    <>
      <Navigation />

      <div className="flex justify-center">
        {/* <MainContent/> */}
        <div className="mx-auto p-6">
          <div>
            <button
              onClick={openModalForNewBlog}
              className="ml-[4rem] bg-black flex justify-center items-center  hover:bg-blue-700 text-white  py-2 px-4 rounded-lg"
            >
              Add Blog
              <IoMdAddCircle className="ml-2" />
            </button>
          </div>
        </div>
        {/* Render article lists  */}
        {isOpen && (
          <BlogModal onClose={() => setIsOpen(false)}>
            <BlogForm
             
              existingBlog={editingBlog}
              onClose={() => setIsOpen(false)}
            />
          </BlogModal>
        )}

        {/* side content */}
        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendzList />
          <TopicList />
        </div>
      </div>
    </>
  );
}

export default App
