import React from 'react'
import { useState } from "react"
import "./SignUp.css"
import FormInput from '../form-input/formInput'
import CustomButton from '../custom-button/customButton'
import axios from "axios"

const defaultFormFields = {
    userId:"",
    UserName: "",
    email: "",
    password: "",
    
  }

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { userId,UserName, email, password} = formFields


    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            
            const response=await axios.post('http://localhost:8087/user/registration',
            {
                id:userId,
                username:UserName,
                email:email,
                password1:password
            });
            console.log(response.data);
            alert("Successfully Registered!!!");
            setFormFields(defaultFormFields);
        }catch(error){
            console.log(error);
            alert("Registration Failed!!,Please try again")
        }
        
      }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
      }

  return (
    <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={(event) => handleSubmit(event)}>
                   <FormInput
                        type='text'
                        name='userId'
                        value={userId}
                        label='User Id'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='text'
                        name='UserName'
                        value={UserName}
                        label='User Name'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        handleChange={handleChange}
                        required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
  )
}

export default SignUp