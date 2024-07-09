import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import Navbar from './Navbar'

const Signup = () => {
  return (
    <>
    <Navbar />
    <div className=' flex justify-center items-center mt-16'>
        <SignUp forceRedirectUrl="/Home" signInUrl="/" />
    </div>   
    </> 
  )
}

export default Signup