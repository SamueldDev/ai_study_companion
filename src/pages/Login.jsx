

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard")
    } catch (err){
        setError(err)
    }
}

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <form
      onSubmit={handlelogin}
      className='bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4'
    >
      <h2 className='text-2xl font-bold text-center text-blue-600'>
        Log In
      </h2>
      {error && <p className='text-red-500 border-gray-300'>{error}</p>}
      <input
        type='email'
        placeholder='Email'
        className='w-full p-3 border border-gray-300 rounded-md'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />
      <input
        type='password'
        placeholder='Password'
        className='w-full p-3 border border-gray-300 rounded-md'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700'
      >
        Log In
      </button>
      <p className='text-center text-sm text-gray-600'>
        Dont have an account? <a href='/signup' className='text-blue-500'>Sign Up</a>
      </p>
    </form>
  </div>
  )
}
