interface GenreFormProps {
  value: string,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  setValue: (value: string) => void,
  handleDelete?: () => void,
 
  buttonText?: string
}

const GenreForm = ({value,handleSubmit,setValue,handleDelete,buttonText="Submit"}: GenreFormProps) => {
  return (
    <div className="p-3">

      <form onSubmit={handleSubmit} className="space-y-3">

        <input type="text" value={value}

        className="py-3 px-4 border rounded-lg w-[60rem] text-black bg-white"
         onChange={(e) => setValue((e.target.value).trim().charAt(0).toUpperCase() + (e.target.value).trim().slice(1))} 
         placeholder="Genre name"/>

        <div className="flex justify-between">
            <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600
            focus:outline  focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">{buttonText}</button>

             {
              // conditionally render the delete button if passed as a prop
            handleDelete && (
              // set button type to button so you do not invoke the form
                <button type="button"  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600
            focus:outline  focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={handleDelete}>Delete</button>
            )
        }
        </div>

       

      </form>

    </div>
  )
}

export default GenreForm