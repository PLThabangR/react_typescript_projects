
import {useForm} from 'react-hook-form'

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
  return (
    <>

    </>
  )
}

export default HookForm