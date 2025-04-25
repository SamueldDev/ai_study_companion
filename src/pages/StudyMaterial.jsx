

// import React from 'react'
// import { db } from '../firebase/config';
// import { collection, addDoc, Timestamp } from 'firebase/firestore';
// import { useLocation } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// export default function StudyMaterial() {


//   const { state } = useLocation();
//   const { topic, generatedContent } = state || {}

//   const { currentUser } = useAuth()

//   const saveToLibrary = async () => {
//     try{
//       if(!topic  || !generatedContent) return;
//       await addDoc(collection(db, "topic"),{
//         userId : currentUser.uid,
//         topic,
//         content: generatedContent,
//         createdAt: Timestamp.now()
//       });
//       alert("saved successfully!")
//     }catch(error){
//       console.error("Error saving:", error)
//     }
//   };

//   return (
//     <div className='max-w-3xl mx-auto mt-10 bg0white p-6 rouned shadow'>
//     <h1 className='text-2xl font-bold mb-4 text-blue-600'>Study Material</h1>
//     <p className='text-gray-700 mb-6'>
//         <strong>Topic:</strong> {topic}
//     </p>

//     {/* placeholder for generated content */}

//     <pre className='bg-gray-100 p-4 rounded whitespace-pre-wrap'>
//         {generatedContent || "No content yet." }
//     </pre>

    
//       <button
//         onClick={saveToLibrary}
//         className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded mt-4'
//       >
//         Save to My Library
//       </button>
//   </div>
//   )
// }






















// before strutured

// import React from 'react';
// import { db } from '../firebase/config';
// import { collection, addDoc, Timestamp } from 'firebase/firestore';
// import { useLocation } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

// export default function StudyMaterial() {
//   const { state } = useLocation();
//   const { topic, generatedContent } = state || {};
//   const { currentUser } = useAuth();

//   const saveToLibrary = async () => {
//     try {
//       if (!topic || !generatedContent) return;
//       await addDoc(collection(db, 'studyMaterials'), {
//         userId: currentUser.uid,
//         topic,
//         content: generatedContent,
//         createdAt: Timestamp.now()
//       });
//       alert("Saved successfully!");
//     } catch (error) {
//       console.error("Error saving:", error);
//     }
//   };

//   if (!generatedContent) {
//     return <p>Loading content...</p>;
//   }

//   const { notes, quiz, flashcards } = generatedContent;

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-4 text-blue-600">📘 Study Material</h1>
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">Topic: {topic}</h2>

//       {/* Notes Section */}
//       <section className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-700 mb-2">📝 Notes</h3>
//         <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{notes}</p>
//       </section>

//       {/* Quiz Section */}
//       <section className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-700 mb-2">❓ Quiz</h3>
//         {quiz?.map((q, i) => (
//           <div key={i} className="mb-4">
//             <p className="font-medium">{q.question}</p>
//             <ul className="pl-4 list-disc">
//               {q.options.map((opt, idx) => (
//                 <li key={idx}>{opt}</li>
//               ))}
//             </ul>
//             <p className="text-green-700 text-sm mt-1">Answer: {q.answer}</p>
//           </div>
//         ))}
//       </section>

//       {/* Flashcards Section */}
//       <section className="mb-6">
//         <h3 className="text-lg font-semibold text-gray-700 mb-2">🧠 Flashcards</h3>
//         {flashcards?.map((card, i) => (
//           <div key={i} className="border p-3 rounded mb-2 bg-gray-50">
//             <p><strong>Front:</strong> {card.front}</p>
//             <p><strong>Back:</strong> {card.back}</p>
//           </div>
//         ))}
//       </section>

//       <button
//         onClick={saveToLibrary}
//         className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded mt-4"
//       >
//         Save to My Library
//       </button>
//     </div>
//   );
// }

































// stuture in notes quiz and flashcard
// StudyMaterial.jsx not passing the state to my topic yet


// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { db } from '../firebase/config';
// import { collection, addDoc, Timestamp } from 'firebase/firestore';
// import { useAuth } from '../hooks/useAuth';

// export default function StudyMaterial() {
//   const { state } = useLocation();
//   const { topic, generatedContent } = state || {};
//   const { currentUser } = useAuth();

//   const [showAnswers, setShowAnswers] = useState({});

//   const saveToLibrary = async () => {
//     try {
//       if (!topic || !generatedContent) return;
//       await addDoc(collection(db, "studyMaterials"), {
//         userId: currentUser.uid,
//         topic,
//         content: generatedContent,
//         createdAt: Timestamp.now()
//       });
//       alert("Saved successfully!");
//     } catch (error) {
//       console.error("Error saving:", error);
//     }
//   };

//   const handleShowAnswer = (index) => {
//     setShowAnswers((prev) => ({ ...prev, [index]: true }));
//   };

//   const { notes, quiz, flashcards } = generatedContent || {};

//   return (
//     <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded shadow">
//       <h1 className="text-2xl font-bold mb-6 text-blue-600">📚 Study Material</h1>
//       <p className="mb-4 text-gray-600"><strong>Topic:</strong> {topic}</p>

//       {/* Notes Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">📝 Notes</h2>
//         <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{notes}</p>
//       </div>

//       {/* Quiz Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">❓ Quiz</h2>
//         {quiz?.map((q, idx) => (
//           <div key={idx} className="mb-4">
//             <p className="font-medium">{q.question}</p>
//             <ul className="pl-4 list-disc">
//               {q.options.map((opt, i) => (
//                 <li key={i}>{opt}</li>
//               ))}
//             </ul>
//             {showAnswers[idx] ? (
//               <p className="text-green-600 mt-1">✅ Answer: {q.answer}</p>
//             ) : (
//               <button
//                 onClick={() => handleShowAnswer(idx)}
//                 className="mt-1 text-blue-500 underline"
//               >
//                 Show Answer
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Flashcards Section */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-2">🧠 Flashcards</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {flashcards?.map((card, index) => (
//             <details key={index} className="bg-blue-50 p-4 rounded cursor-pointer">
//               <summary className="font-semibold">{card.front}</summary>
//               <p className="mt-2">{card.back}</p>
//             </details>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={saveToLibrary}
//         className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
//       >
//         💾 Save to My Library
//       </button>
//     </div>
//   );
// }












































// passing the state to mytopic
import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function StudyMaterial() {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  // const [showAnswer, setShowAnswers] = useState(false);

  const [visibleAnswers, setVisibleAnswers] = useState({})

   const toggleAnswer = (idx) => {
    setVisibleAnswers(prev => ({
      ...prev,
      [idx] : !prev[idx]
    }));
   };

  const { state } = useLocation();
  const { topic, notes, quiz, flashcards, isSaved } = state || {};

  const { currentUser } = useAuth();

  const saveToLibrary = async () => {
    if (!topic || !notes || !quiz || !flashcards) return;
    try {
      await addDoc(collection(db, 'studyMaterials'), {
        userId: currentUser.uid,
        topic,
        notes,
        quiz,
        flashcards,
        createdAt: Timestamp.now(),
      });
      alert('Saved successfully!');
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">📚 Study Material</h1>
      <p className="text-gray-700 mb-4">
        <strong>Topic:</strong> {topic}
      </p>

      {/* Notes Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-green-700">📝 Notes</h2>
        <p className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{notes}</p>
      </section>

      {/* Quiz Section */}
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



        {/* {quiz && quiz.map((q, idx) => (
          <div key={idx} className='mb-4'>
              <p className='font-medium'>{q.question}</p>
              <ul className='pl-4 list-disc text-sm text-gray-700'>
                  {q.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
              </ul>
              {showAnswer && (
                <p className='text-grren-600 text-sm mt-1'>Answer: {q.answer}</p>
              )}
          </div>
        ))} */}

        {/* <button
          onClick={() => setShowAnswers(prev => !prev)}
          className='text-sm text-purple-600 underline mt-2'
        >
          {showAnswer ? "Hide Answers" : "Show Answers"}
        </button> */}

        

      </section>

      {/* Flashcards Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-blue-700">🧠 Flashcards</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {flashcards && flashcards.map((card, idx) => (
            <div key={idx} className="border p-4 rounded shadow-sm bg-blue-50">
              <p className='font-semibold mb-4'>
                {flippedCardIndex === idx ? "🎯 Back" : "🧠 Front"} 
              </p>
              <p className='text-gray-800 mb-4'>
                {flippedCardIndex === idx ?card.back : card.front}
              </p>


                {/* {flippedCardIndex === idx ? `Back: ${card.back}` : `Front${card.front}`} */}

                <button
                  onClick={() => {
                    setFlippedCardIndex(flippedCardIndex === idx ? null : idx)

                  }}
                  className='mt-2 text-sm text-blue hover:underline'
                >
                  {flippedCardIndex === idx ? "Show Front" : "Show Back"}

                </button>
              
             
            </div>
          ))}
        </div>
      </section>

       {!isSaved ? (
          <button
          onClick={saveToLibrary}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded mt-6"
        >
          Save to My Library
        </button>
       ) : (
        <p className='text-gren-700 font-semibold mt-6'>Already Saved to your Library</p>
       )}   
      
    </div>
  );
}

