




import React from 'react';
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const ProfileSettings = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  // Delete Account function
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete your account? This action is permanent!'
    );

    if (confirmDelete) {
      try {
        await deleteUser(user);
        alert('Account deleted successfully.');
        navigate('/signup'); // Redirect to signup or homepage
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('Error deleting account. You might need to re-login to confirm this action.');
      }
    }
  };

  return (

    <>
       <Link
              to="/dashboard"
              className="inline-block mb-4 text-blue-600 hover:underline"
              >
              ← Back to Dashboard
        </Link>

        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Profile / Settings</h1>

      <button
        onClick={handleLogout}
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 mb-4"
      >
        Logout
      </button>

      <button
        onClick={handleDeleteAccount}
        className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
      >
        Delete Account
      </button>
    </div>
    </>


    
  );
};

export default ProfileSettings;


