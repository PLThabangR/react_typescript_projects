import React, { Children } from 'react'

interface UserType{
    _id?: object,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}

interface CardProps{
    children: React.ReactNode,
    userInfo?: UserType

}
const Card = ({children}: CardProps) => {
  return (
    <div>

{children}

    </div>
  )
}

export default Card