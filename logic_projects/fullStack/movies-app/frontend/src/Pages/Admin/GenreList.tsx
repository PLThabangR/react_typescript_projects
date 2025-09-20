
import { useGetAllGenresQuery, useDeleteGenreMutation, useCreateGenreMutation, useUpdateGenreMutation,useGetGenreByIdQuery } from "../../app/api/genre"
import {toast} from 'react-toastify'
import { useEffect, useState } from "react";
import GenreForm from "../../components/GenreForm";
import Modal from "../../components/Modal";

interface Genre {
  _id: Object;
  name: string;
}

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

    // // get genre by id
    // const {data :genre} = useGetGenreByIdQuery({id:""});


    //creat state hooks
   const  [name,setName] = useState<string>('');
const [selectedGenre,setSelectedGenre] = useState<Genre| null>(null);
const [updateName,setUpdateName] = useState<string>('');
const [modalVisible,setModalVisible] = useState<boolean>(false);


//functions 
const handleCreateGenre = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   //Defenssive programmig

   
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
const handleDeleteGenre = async() => {
    
  try {
    //delete genre function from rtk
    const res = await deleteGenre(selectedGenre?._id).unwrap();
    //redirect user to home
    toast.success(`Genre ${selectedGenre?.name} deleted successfully`);

    //refetch ui
    refetch();
    //close modal
    setModalVisible(false);
    setSelectedGenre(null);

      
    }catch (error:any) {
        toast.error(error?.data?.message || error.message );
    }
}




const handleUpdateGenre = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Valit\dations checks
    
     
     
      if(selectedGenre?.name === updateName){
       return toast.error('Please enter a different genre name');
      }
      //Defenssive programmig
    try {

        //update genre function from rtk
        const res = await updateGenre({id:selectedGenre?._id,name:updateName}).unwrap();

        if(res.error){
          return toast.error(res.error.data.message);
        }
        //redirect user to home
        toast.success('Genre updated successfully');
        refetch();
        //close modal
        setModalVisible(false);
        //reset state
        setSelectedGenre(null);
        setUpdateName('');
        
       

    } catch (error:any) {
        toast.error(error?.data?.message || error.message );
    }
}

const displaySelectedGenre = () => {
   console.log(selectedGenre)
}

 useEffect(
  displaySelectedGenre
 
,[selectedGenre]);


    
  return (
    <div className="ml=[10rem] flex flex-col md:flex-row">
        <div className="md:w-3/4 p-3">

                <h1 className="text-2xl font-bold">Manage genres</h1>

                {/* reuase genre form component  for create */} 
                <GenreForm value={name} setValue={setName} handleSubmit={handleCreateGenre}  />


                <br></br>
                {/* display all genres */}
                <div className="flex flex-wrap">
                  {genres?.map((genre: Genre, index:any) => (
                    <div key={index} className="p-2">
                      <button
                      className="bg-white text-teal-500 border border-teal-500 py-2 px-4 rounded-lg hover:bg-teal-500
                      hover:text-white focus:outline  focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                     
                     onClick={()=>{
                      // open modal
                      setSelectedGenre(genre);
                     
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
                  <GenreForm value={updateName} setValue={setUpdateName} handleSubmit={handleUpdateGenre} handleDelete={handleDeleteGenre} buttonText="Update" />
                </Modal>
                {/* end of create modal */}
                

        </div>
    </div>
  )
}

export default GenreList