import React from 'react'
import { useState } from "react"
import FormInput from '../../components/form-input/formInput'
import CustomButton from '../../components/custom-button/customButton'
import "./SignIn.css"
import axios from 'axios'
const defaultFormFields = {
    userName: "",
    password: "",
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { userName, password } = formFields


    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response=await axios.post('http://localhost:8087/user/login',{
                username:userName,
                password1:password
            });
            console.log(response.data);
            alert("User Logged In Successfully");
            setFormFields(defaultFormFields);
        }catch(error){
            console.log(error);
            alert("Username or Password is wrong");
        }
      }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
      }
  return (
    <div className='sign-in'>
                <h3>I already have an account</h3>
                <span>Sign in with your username and password</span>

                <form className='sign-in-form' onSubmit={(event)=>handleSubmit(event)}>
                    <FormInput
                        type='text'
                        name='userName'
                        value={userName} 
                        label='UserName'
                        handleChange={handleChange}
                        required />
                    <FormInput
                        type='password'
                        name='password'
                        label='Password'
                        value={password} 
                        handleChange={handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                    </div>

                </form>
            </div>
  )
}

export default SignIn
