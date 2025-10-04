import React from 'react'
import USerCard from './USerCard'

interface PeopleToFollow{
name:string,
following:boolean
}

const peopleToFollow:PeopleToFollow[] =[
    {name:"Alena jones", following:false},
    {name:"David Gomez", following:true},
    {name:"Lena Muarice", following:false},
    {name:"Diana jones", following:true},

]

const PeopleToFollow = () => {
  return (
    <div className='bg-white p-4 rounded-lg shadow'>
        <h3 className='font-semibold text-lg mb-4'>People to follow</h3>
        <div className='space-y-4'>
        { peopleToFollow.map((person, index) => (
                <USerCard key={index} name={person.name} following={person.following} />
        ))}
        </div>

    </div>
  )
}

export default PeopleToFollow