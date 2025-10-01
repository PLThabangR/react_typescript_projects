
import Card from './Card'
import Display from './Display';

interface UserType {
    _id?: number,
    name: string,
    age: number,
   isStudent: boolean
}
export const User = () => {
    const userArray:UserType[]=[{_id:1,name:"A",age:21,isStudent:false},{_id:2,name:"B",age:28,isStudent:true},{_id:3,name:"C",age:32,isStudent:false}];
  return (
    <div>
        {/* <Card>
            <h2>User</h2>
            <p>This data rendered fromCard </p>
        </Card> */}

{
    userArray.map((user,index)=>(
     <Display key={index} name={user.name} age={user.age} isStudent={user.isStudent}  _id={user._id} />
        
    ))
}

    </div>
  )
}
