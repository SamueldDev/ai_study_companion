

import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';


export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    
    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/dashboard")
        } catch (err){
            setError(err.message)
        }
    }


  return (
    <div>
    <div className='min-h-screen flex items-enter justify-center bg-gray-100'>
        
        <form
        className='bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4' 
        onSubmit={handleSignUp}
        >
        <h2>Create your account</h2> 
        {error && <p className='text-red-500 text-sm'>{error}</p>}
            <input
            className='w-full p-3 border border-gray-300 rounded-md'
            type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />

            <input  
            className='w-full p-3 border border-gray-300 rounded-md'
            type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            
            <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500'
            >
                Sign Up
            </button>
            <p className='text-center text-sm text-gray-600'>
                Already have an account? 
                <a href='/login' className='text-blue-500'>
                    Login
                </a>
            </p>
        </form>
    </div>
</div>
  )
}
