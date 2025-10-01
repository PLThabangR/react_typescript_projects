
import { useState } from 'react';


interface UserProfile{
    name: string,
    age: number,

}
export const User = () => {
  const [user, setUser] = useState<UserProfile>({name: '', age: 0})
  const [age,setAge] = useState<number>();
  const [name,setName] = useState<string>();

  const handleUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  if(!name || !age) return

    setUser({...user, name, age});

  }
  return (
   <>
   
   <form onSubmit={handleUpdateUser}>
    <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
    <input type="number" placeholder='Age' onChange={(e) => setAge(parseInt(e.target.value))} />
    <button type='submit'>Update User</button>
   </form>


   {user&& (
    <>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    </>
   )}
  
   </>


  )
}
