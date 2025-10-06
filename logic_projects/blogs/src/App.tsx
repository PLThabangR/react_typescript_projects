
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
import { useDispatch } from 'react-redux'

//import actions
import { addBlog } from "./app/features/blogSlice";

function App() {
  //Satae
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [editingBlog,setIsEditingBlog] = useState<Blog|null>(null)

  //Create hooks
  const  [title,setTitle] = useState<string>('')
  const [description,setDescription] = useState<string>('')
  const [image,setImage] = useState<string>('')
  const [date,setDate] = useState<string>('')
  const [author,setAuthor] = useState<string>('')

  //Rdedx hook
         const dispatch = useDispatch()
  //Functions
  const createBlog =async (e: React.FormEvent<HTMLFormElement>) => {
   
      const newBlog: Blog = {
        id: Math.floor(Math.random() * 1000),
        title,
        description,
        image,
        date,
        author,
      }
      dispatch(addBlog(newBlog))

      //reset state
      setTitle('')
      setDescription('')
      setImage('')
      setDate('')
      setAuthor('')
      //close modal after creating a blog
      setIsOpen(false)
      
  }

  const openModal = () => {
     setIsOpen(true)
    // openModalForEdidting(null)
  }

  // const openModalForEdidting = () => {
  //   setIsOpen(true)
  //   setIsEditingBlog(null)
  // }

  return (
    <>
      <Navigation />

      <div className="flex justify-center">
        {/* <MainContent/> */}
        <div className="mx-auto p-6">
          <div>
            <button
              onClick={openModal}
              className="ml-[4rem] bg-black flex justify-center items-center  hover:bg-blue-700 text-white  py-2 px-4 rounded-lg"
            >
              Add Blog
              <IoMdAddCircle className="ml-2" />
            </button>
          </div>
        </div>
        {/* Render article lists  */}
        {isOpen &&( <BlogModal onClose={()=>setIsOpen(false)}>
            {/* <BlogForm exitingBlog={editingBlog} onClose={()=>setIsOpen(false)} /> */}
          </BlogModal>)}

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
