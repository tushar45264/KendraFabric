import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import Navbar from './Navbar'


const Login = () => {
  return (
    <>
        <Navbar />
        <div className=' flex justify-center items-center mt-20'>
        <SignIn forceRedirectUrl="/Home" signUpUrl="/Signup" />
        </div>
    </>    
  )
}

export default Login