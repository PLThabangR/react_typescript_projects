
import {useForm, type SubmitHandler} from 'react-hook-form'

interface FormData{
    name:string,
    email:string,
    password:string
}

const HookForm = () => {
    //instance of useForm hook
    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm<FormData>();

//register is used to connect input fields to the form

//handleSubmit is a function to handle submission

//errors contaian validation errors fot the form

//Creating the on Submit functiopn
const onsubmit :SubmitHandler<FormData> = (data) => {
    console.log(data)
}
  return (
    <>
<form onSubmit={handleSubmit(onsubmit)}>
    <input type="text" placeholder='Name' {...register('name')} />
    <input type="email" placeholder='Email' {...register('email')} />
    <input type="password" placeholder='Password' {...register('password')} />
    <button type='submit' disabled={isSubmitting}>Submit</button>

</form>
    </>
  )
}

export default HookForm