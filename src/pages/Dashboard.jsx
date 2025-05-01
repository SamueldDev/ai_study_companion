





import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Greeting */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          Welcome back, {currentUser?.email?.split('@')[0]}! 👋
        </h2>
        <p className="text-gray-600 text-lg italic">
          "The beautiful thing about learning is that no one can take it away from you." – B.B. King
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <Link
          to="/new-topics"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow hover:scale-105 transition transform duration-200 text-center font-semibold"
        >
          📘 Create New Topic
        </Link>
        <Link
          to="/my-topics"
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow hover:scale-105 transition transform duration-200 text-center font-semibold"
        >
          📂 View My Library
        </Link>
        <Link
          to="/review/someTopicId"
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow hover:scale-105 transition transform duration-200 text-center font-semibold"
        >
          🧠 Review Flashcards
        </Link>
      </div>

      {/* Tip or Call to Action */}
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">💡 Study Tip</h3>
        <p className="text-gray-600">
          Break your study into short, focused sessions. Aim for consistency over intensity.
        </p>
      </div>
    </div>
  );
}
