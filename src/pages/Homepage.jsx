

import React from 'react'
import { Link } from 'react-router-dom'



export default function Homepage() {
  return (  
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-blue-200 text-center p-6">
        <h1 className='text-4xl font-bold text-blue-700 mb-4'>Study Smarter with AI</h1>
        <p className='text-gray-600 mb-8 max-w-md'>
          Generate notes, quizzes and flashcards instantly. Your AI-powered Study Companion
        </p>
        <div className='space-x-4'> 

          
          <Link 
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg'
          to="/signup">
          Sign Up
          </Link>
      
        <Link 
        className='text-blue-600 font-semibold underline'
        to="/login">
          Login
        </Link>
        </div>
       
    </div>

  )
}
