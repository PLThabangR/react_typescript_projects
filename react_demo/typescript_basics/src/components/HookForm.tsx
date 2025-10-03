
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
    <input type="text" placeholder='Name' {...register('name',{required:"Name is required"})} />
    {errors.name && <p  style={{color:"red"}}>{errors.name.message}</p>}
    <input type="text" placeholder='Email' {...register('email',{required:"Email is required",
         pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"Invalid email address"}
    })} />
     {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
    <input type="password" placeholder='Password' {...register('password',
    {required:"Password is required",
    minLength:{value:6, message:"Password must be at least 6 characters"}}
    )} />
     {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

    <button type='submit' disabled={isSubmitting}>{isSubmitting?"Submitting...":"Submit"}</button>

</form>


    </>
  )
}

export default HookForm