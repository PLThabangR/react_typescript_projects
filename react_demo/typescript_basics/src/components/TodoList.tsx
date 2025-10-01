
import { useState } from 'react';


interface Todo{
    name: string,
    status: boolean,

}
export const User = () => {
 const [todo,setTodo] = useState<Todo[]>([]);
 const [name,setName] = useState<string>('');
 const [status,setStatus] = useState<boolean>(false);

 const handleClick = () => {
    if(!name || !status) return;

    setTodo((prevTodo) => [...prevTodo,{name,status}]);
    setName('');
    setStatus(false);
    console.log(todo);
 }
  
  return (
   <>
    <form>
    <label htmlFor="name">Name</label>
<input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}   />

<label htmlFor="status">Status</label>
<input type="text" name="status" id="name" onChange={(e) => setStatus(Boolean(e.target.value))}   />

<button type='button' onClick={handleClick}>Submit</button>
    </form>


    {
        todo.length>0 && (
            todo.map((item:Todo,index)=>(
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.status.toString()}</p>
                </div>
            ))


            
        )
    }
  
   </>
  )

}

