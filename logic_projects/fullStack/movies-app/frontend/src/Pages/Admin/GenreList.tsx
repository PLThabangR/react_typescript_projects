import { useSelector,useDispatch } from "react-redux"
import { useGetAllGenresQuery, useDeleteGenreMutation, useCreateGenreMutation, useUpdateGenreMutation,useGetGenreByIdQuery } from "../../app/api/genre"
import {toast} from 'react-toastify'
import { use, useState } from "react";
import GenreForm from "../../components/GenreForm";
import Modal from "../../components/Modal";

const GenreList = () => {
    // fetch all genres
    const {data :genres,refetch} = useGetAllGenresQuery({});

    // Destructure RTK Query functions
    // create genre
    const [createGenre] = useCreateGenreMutation();
    // update genre
    const [updateGenre] = useUpdateGenreMutation();
    // delete genre
    const [deleteGenre] = useDeleteGenreMutation();

    // get genre by id
    const {data :genre} = useGetGenreByIdQuery({id:""});


    //creat state hooks
   const  [name,setName] = useState('');
const [selectedGenreId,setSelectedGenreId] = useState('');
const [updateName,setUpdateName] = useState('');
const [modalVisible,setModalVisible] = useState(false);


//functions 
const handleCreateGenre = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   //Defenssive programmig
      if(!name){
       return toast.error('Please enter a genre name');
      }
   
    try {
      
        //create genre function from rtk
        const res = await createGenre({name}).unwrap();
        //redirect user to home

        if(res.error){
          return toast.error(res.error.data.message);
        }

        setName('');
        toast.success('Genre created successfully');
        refetch();
    } catch (error:any) {
        toast.error(error?.data?.message || error.message );
    }
}

//delete genre
const handleDeleteGenre = async(id:string) => {
    
  try {
      
    }catch (error:any) {
        toast.error(error?.data?.message || error.message );
    }
}




const handleUpdateGenre = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      if(updateName === ''){
        toast.error('Please enter a genre name');
      }
        //update genre function from rtk
        const res = await updateGenre({id:selectedGenreId,name:updateName}).unwrap();
       
        //redirect user to home
        toast.success('Genre updated successfully');
    } catch (error:any) {
        toast.error(error?.data?.message || error.message );
    }
}






    
  return (
    <div className="ml=[10rem] flex flex-col md:flex-row">
        <div className="md:w-3/4 p-3">
                <h1>Manage genres</h1>

                {/* reuase genre form component  for create */} 
                <GenreForm value={name} setValue={setName} handleSubmit={handleCreateGenre} handleDelete={deleteGenre}  />


                <br></br>
                {/* display all genres */}
                <div className="flex flex-wrap">
                  {genres?.map((genre) => (
                    <div key={genre.id} className="p-2">
                      <button
                      className="bg-white text-teal-500 border border-teal-500 py-2 px-4 rounded-lg hover:bg-teal-500
                      hover:text-white focus:outline  focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                     
                     onClick={()=>{
                      // open modal
                      setSelectedGenreId(genre.id);
                      setUpdateName(genre.name);
                      setModalVisible(true);
                     }}
                     >{genre.name}</button>
                    </div>
                  ))}
                </div>
                  {/* end of display all genres */}

                  {/* create modal */}
                <Modal isOpen ={modalVisible} onClose={() => setModalVisible(false)}>
                  {/* reuse genre form component for update */}
                  <GenreForm value={updateName} setValue={setUpdateName} handleSubmit={updateGenre} handleDelete={deleteGenre} buttonText="Update" />
                </Modal>
                {/* end of create modal */}
                

        </div>
    </div>
  )
}

export default GenreList