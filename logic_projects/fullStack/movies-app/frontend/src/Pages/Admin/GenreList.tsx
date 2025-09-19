import { useSelector,useDispatch } from "react-redux"
import { useGetAllGenresQuery, useDeleteGenreMutation, useCreateGenreMutation, useUpdateGenreMutation,useGetGenreByIdQuery } from "../../app/api/genre"
import {toast} from 'react-toastify'
import { use, useState } from "react";

const GenreList = () => {
    // fetch all genres
    const {data :genres,refech} = useGetAllGenresQuery({});

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









    
  return (
    <div className="ml=[10rem] flex flex-col md:flex-row">
        <div className="md:w-3/4 p-3">
                <h1>Manage genres</h1>

                <GenreForm value={name} setValue={setName} handleSubmit={createGenre} />


                

        </div>
    </div>
  )
}

export default GenreList