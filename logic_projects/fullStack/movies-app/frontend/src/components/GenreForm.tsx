

const GenreForm = ({value,handleSubmit,setValue,handleDelete,buttonText="Submit"}) => {
  return (
    <div className="p-3">

      <form onSubmit={handleSubmit} className="space-y-3">

        <input type="text" value={value}

        className="py-3 px-4 border rounded-lg w-[60rem] text-white-900"
         onChange={(e) => setValue(e.target.value)} 
         placeholder="Genre name"/>

        <div className="flex justify-between">
            <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600
            focus:outline  focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">{buttonText}</button>
        </div>

        {
            handleDelete && (
                <button  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600
            focus:outline  focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={handleDelete}>Delete</button>
            )
        }

      </form>

    </div>
  )
}

export default GenreForm