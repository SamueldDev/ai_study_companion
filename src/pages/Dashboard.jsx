

import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'


export default function Dashboard() { 

    const { currentUser } = useAuth();    



  return (
    <div className="p-6">
    <h2 className='texr-2xl font-bold mb-4'>Hi, {currentUser?.email} 👋</h2>

    {/* Quick Actions */}
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6'>
        <Link to="/new-topics" className="bg-blue-500 text-white p-4 rounded-xl shadow hover:bg-blue-600 transition">📘 New Topic</Link>
        <Link to="/my-topics" className="bg-blue-500 text-white p-4 rounded-xl shadow hover:bg-blue-600 transition">📂 My Topic</Link>
        <Link to="/flashcards" className="bg-blue-500 text-white p-4 rounded-xl shadow hover:bg-blue-600 transition">🧠 Reviews</Link>
    </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div className='bg-white p-4 rounded-xl shadow text-center'>
              <p className='text-gray-500'>Quiz Accuracy</p>
              <h3 className='text-xl font-semibold'>84%</h3>
          </div>
          <div className='bg-white p-4 rounded-xl shadow text-center'>
              <p className='text-gray-500'>Flashcards Due</p>
              <h3 className='text-xl font-semibold'>5 Today</h3>
          </div>
          <div className='bg-white p-4 rounded-xl shadow text-center'>
              <p className='text-gray-500'>Study Streak </p>
              <h3 className='text-xl font-semibold'>3 Days</h3>
          </div>
      </div>

  </div>
  )
}
