import React, { useState } from 'react'

interface User{
    name: string,
    email: string
    password: string
}

const Form = () => {
    const [userInfo, setUserInfo] = useState<User>({name: '', email: '', password: ''});
  return (
    <div>Form</div>
  )
}

export default Form