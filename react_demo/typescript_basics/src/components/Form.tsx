import React, { useRef, useState } from 'react'

interface User{
    name: string,
    email: string
    password: string
}

const Form = () => {
    const [userInfo, setUserInfo] = useState<User>({name: '', email: '', password: ''});
    const name =useRef<HTMLInputElement>(null);
       const email =useRef<HTMLInputElement>(null);
          const password =useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
   
        //Get curerent value of inputs and tell compiler that they are not null
         const nameValue : string = name.current!.value;
        const emailValue : string = email.current!.value;
        const passwordValue : string = password.current!.value;

        setUserInfo({name: nameValue, email: emailValue, password: passwordValue});
      
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' ref={name}   />
            <input type="email" placeholder='Email' ref={email}  />
            <input type="password" placeholder='Password' ref={password}  />
            <button type='submit'>Submit</button>   


        </form>

        <section>
                <h1>Name: {userInfo.name}</h1>
                <h1>Email: {userInfo.email}</h1>
                <h1>Password: {userInfo.password}</h1>
        </section>

    </div>
  )
}

export default Form