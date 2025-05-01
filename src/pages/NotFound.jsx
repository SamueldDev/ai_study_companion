


import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
   

    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
    <p className="text-lg text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
    <Link
      to="/"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Go to Homepage
    </Link>
  </div>

  )
}
