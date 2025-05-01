

import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function Navbar() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login")
    };    

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
          
        <Link to="/" className='text-xl font-bold text-blue-600'>📚 Study AI</Link>
    
        <div className='flex items-center space-x-4'>
            {currentUser ? (
                <>
                    <span className='text-sm text-gray-700'> 👤 {currentUser.email}</span>
                    
                    {/* Profile Settings Link */}
                    <Link 
                        className='text-blue-600 font-medium'
                        to="/profile-settings">
                        Profile Settings
                    </Link>
                    
                    <button
                        className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm' 
                        onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link 
                        className='text-blue-600 font-medium'
                        to="/login">
                        Login
                    </Link>

                    <Link
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4  py-2 rounded-lg text-sm' 
                        to="/signup">
                        Sign Up
                    </Link>
                </>
            )}
        </div>
    </nav>
  )
}
