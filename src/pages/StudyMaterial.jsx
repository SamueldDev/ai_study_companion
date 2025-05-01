

import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function StudyMaterial() {
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  const [visibleAnswers, setVisibleAnswers] = useState({});
  const [saved, setSaved] = useState(false); // Track save state locally

  const { state } = useLocation();
  const { topic, notes, quiz, flashcards, isSaved } = state || {};

  const { currentUser } = useAuth();

  const toggleAnswer = (idx) => {
    setVisibleAnswers(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const saveToLibrary = async () => {
    if (!topic || !notes || !quiz || !flashcards || saved || isSaved) return;

    try {
      await addDoc(collection(db, 'studyMaterials'), {
        userId: currentUser.uid,
        topic,
        notes,
        quiz,
        flashcards,
        createdAt: Timestamp.now(),
      });

      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 3000);
      
      setSaved(true); // Disable button and show message
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  return (

    <>

      {showSavedMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow z-50 transition-opacity">
          ✅ Topic saved to your Library!
        </div>
      )}


      <Link
            to="/dashboard"
            className="inline-block mb-4 text-blue-600 hover:underline"
            >
            ← Back to Dashboard
            </Link>

      
            <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">📚 Study Material</h1>
      <p className="text-gray-700 mb-4">
        <strong>Topic:</strong> {topic}
      </p>

      {/* Notes */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">📝 Notes</h2>
        <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{notes}</p>
      </section>

      {/* Quiz */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-purple-700">❓ Quiz</h2>
        {quiz && quiz.map((q, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-medium">{q.question}</p>
            <ul className="pl-4 list-disc text-sm text-gray-700">
              {q.options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>

            <button
              onClick={() => toggleAnswer(idx)}
              className="text-blue-600 text-sm mt-1"
            >
              {visibleAnswers[idx] ? "Hide Answer" : "Show Answer"}
            </button>

            {visibleAnswers[idx] && (
              <p className="text-green-600 text-sm mt-1">✅ Answer: {q.answer}</p>
            )}
          </div>
        ))}
      </section>

      {/* Flashcards */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-blue-700">🧠 Flashcards</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {flashcards && flashcards.map((card, idx) => (
            <div key={idx} className="border p-4 rounded shadow-sm bg-blue-50">
              <p className='font-semibold mb-4'>
                {flippedCardIndex === idx ? "🎯 Back" : "🧠 Front"} 
              </p>
              <p className='text-gray-800 mb-4'>
                {flippedCardIndex === idx ? card.back : card.front}
              </p>

              <button
                onClick={() => {
                  setFlippedCardIndex(flippedCardIndex === idx ? null : idx);
                }}
                className='mt-2 text-sm text-blue hover:underline'
              >
                {flippedCardIndex === idx ? "Show Front" : "Show Back"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Save Button */}
      {isSaved || saved ? (
        <p className='text-green-700 font-semibold mt-6'>✅ Already Saved to your Library</p>
      ) : (
        <button
          onClick={saveToLibrary}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded mt-6"
        >
          Save to My Library
        </button>
      )}
    </div>

    
    </>




  );
}
