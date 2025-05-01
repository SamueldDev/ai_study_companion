
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

const FlashcardReview = () => {
  const { topicId } = useParams(); // To get the topicId from the URL
  const navigate = useNavigate();

  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState(new Set());
  const [loading, setLoading] = useState(true);

  // Fetch the flashcards when the page loads
  useEffect(() => {
    if (!topicId) {
      console.warn("No topicId found in URL, redirecting...");
      navigate("/my-topics", { replace: true });
      return; // Exit early if there's no topicId
    }

    const fetchFlashcards = async () => {
      const docRef = doc(db, "studyMaterials", topicId); // Assuming topicId is the correct ID of the topic
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setFlashcards(data.flashcards || []);
      }
      setLoading(false);
    };

    fetchFlashcards();
  }, [topicId, navigate]);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const nextCard = () => {
    let nextIndex = currentIndex + 1;
    while (nextIndex < flashcards.length && knownCards.has(nextIndex)) {
      nextIndex++;
    }
    if (nextIndex < flashcards.length) {
      setCurrentIndex(nextIndex);
      setFlipped(false);
    }
  };

  const prevCard = () => {
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0 && knownCards.has(prevIndex)) {
      prevIndex--;
    }
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
      setFlipped(false);
    }
  };

  const markAsKnown = () => {
    setKnownCards((prev) => new Set(prev).add(currentIndex));
    nextCard();
  };

  if (loading) {
    return <div className="text-center py-8 text-gray-600">Loading flashcards...</div>;
  }




  if (flashcards.length === 0) {
    return (
      <>
        <div className="flex flex-col items-center justify-center text-center py-8 text-red-500">
          <p>No flashcards available for this topic. Choose a card from MyTopic</p>
          <Link
            to="/my-topics"
            className="mt-6 text-blue-500 hover:underline"
          >
            ← Back to My Topics
          </Link>
        </div>
      </>
    );
  }
  

  const currentCard = flashcards[currentIndex];

  return (

    <>
          <Link
              to="/dashboard"
              className="inline-block mb-4 text-blue-600 hover:underline"
              >
              ← Back to Dashboard
              </Link>

              <div className="max-w-xl mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Flashcard Review</h2>

      {/* Instruction for the user */}
      <p className="mb-4 text-sm text-gray-500">Click on the card to flip it!</p>

      <div
        className="border-2 border-gray-300 rounded-xl p-6 shadow-md cursor-pointer bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105 min-h-[150px] flex items-center justify-center text-xl"
        onClick={handleFlip}
      >
        {flipped ? currentCard.back : currentCard.front}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevCard}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
          disabled={currentIndex === 0}
        >
          Previous
        </button>

        <button
          onClick={markAsKnown}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Mark as Known
        </button>

        <button
          onClick={nextCard}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
          disabled={currentIndex === flashcards.length - 1}
        >
          Next
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Card {currentIndex + 1} of {flashcards.length}
      </p>

      <button
        onClick={() => navigate("/my-topics")}
        className="mt-6 text-blue-500 hover:underline"
      >
        ← Back to Topic List
      </button>
    </div>
      

    </>


    
  );
};

export default FlashcardReview;
