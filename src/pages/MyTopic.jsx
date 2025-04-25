
// mine
// import { getAuth } from 'firebase/auth';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { db } from '../firebase/config';
// import { collection, getDocs, query, where } from 'firebase/firestore';

// export default function MyTopic() {

//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true)
//   const navigate = useNavigate();
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     const fetchTopics = async () => {
//       if(!user) return;

//       try{
//         const q =  query(
//           collection(db, "studyMaterials"),
//           where("userId", "==", user.uid)
//         );
//         const querySnapshot = await getDocs(q);
//         const data =querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));

//         setTopics(data)
//       }catch (err){
//         console.err("error fetching topics", err)
//       } finally{
//         setLoading(false)
//       }
//     }

//     fetchTopics();

//   }, [user])


  
//   const handleViewTopic = (topic) => {
//     navigate("/study-material",{
//       state: {
//         topic : topic.topic,
//         notes : topic.notes,
//         quiz : topic.quiz,
//         flashcards: topic.flashcards,
//         // generatedContent : topic.content
//       },
//     });
//   };

//   return (

//       <div className='max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow'>
//           <h1 className='text-2xl font-bold mb-4 text-blue-600'>📂 My Topics</h1>

//           {loading ? (
//             <p>Loading topics...</p>
//           ) : topics.length === 0 ? (
//             <p>No topics saved yet.</p>
//           ) : (
//             <ul className='space-y-4'>
//               {topics.map((t) => (
//                 <li
//                   key={t.id}
//                   onClick={() => handleViewTopic(t)}
//                   className='cursor-pointer border rounded p-4 hover:bg-blue-50 trans '
//                 >
//                   <h2 className='font-semibold text-lg'>{t.topic}</h2>
//                   <p className='text-sm text-gray-600 line-clamp-2'>  
//                     {t.notes?.slice(0, 120) || "No notes available"}
//                   </p>

//                 </li>
//               ))}
//             </ul>
//           )}
//       </div>  

    
//   )
// }








/// chat
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, getDocs, query, where, doc, deleteDoc } from 'firebase/firestore';

export default function MyTopic() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchTopics = async () => {
      if (!user) return;

      try {
        const q = query(
          collection(db, 'studyMaterials'),
          where('userId', '==', user.uid)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTopics(data);
      } catch (err) {
        console.error('Error fetching topics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [user]);

  const handleViewTopic = (topic) => {
    navigate('/study-material', {
      state: {
        topic: topic.topic,
        notes: topic.notes,
        quiz: topic.quiz,
        flashcards: topic.flashcards,
        isSaved: true,
      },
    });
  };


  const handleDelete = async (id) => {
    const confirm = window.confirm("Are  you sure you want to delete the topic");
    if(!confirm) return;

    try{
      await deleteDoc(doc(db, "studyMaterials", id));
      setTopics(prev => prev.filter(t => t.id !== id));
    } catch(err){
      console.error("Error deleting topic", err)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">📂 My Topics</h1>

      {loading ? (
        <p>Loading topics...</p>
      ) : topics.length === 0 ? (
        <p>No topics saved yet.</p>
      ) : (
        <ul className="space-y-4">
          {topics.map((t) => (
            <li
              key={t.id}
              onClick={() => handleViewTopic(t)}
              className="relative cursor-pointer border rounded p-4 hover:bg-blue-50 transition"
            >
              <h2 className="font-semibold text-lg">{t.topic}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {t.notes?.slice(0, 120) || "No notes available."}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(t.id);

                }}
                className='absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm'
              >
                🗑️ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
















































// <div className='max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow'>
    //     <h1 className='text-2xl font-bold mb-4 text-blue-600'>My Topics</h1>
    //     <p className='text-gray-600'>You have'nt saved  any topics yet.</p>

    //     {/* later we mapp through user's saved topic and show Topic PreviewCards */}
    // </div>