


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { generateStudyMaterial } from '../ai/openai';

export default function NewTopic() {

    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGenerate = async (e) => {
        e.preventDefault();
        if (!topic.trim() || loading) return;
        setLoading(true);

        try {
            const result = await generateStudyMaterial(topic);

            navigate("/study-material", {
                state: {
                    topic,
                    notes: result.notes,
                    quiz: result.quiz,
                    flashcards: result.flashcards
                }
            });

        } catch (error) {
            console.error("OpenAI error:", error);
            if (error.response?.status === 429) {
                alert("Something went wrong with OpenAI. Please wait a moment and try again.");
            } else {
                alert("Something went wrong with OpenAI.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow'>
                {/* Back Button */}
                <Link
                    to="/dashboard"
                    className={`inline-block mb-4 px-4 py-2 rounded text-white text-sm ${
                        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    onClick={(e) => loading && e.preventDefault()}
                >
                    ← Back to Dashboard
                </Link>

                <h1 className='text-2xl font-bold mb-4 text-blue-600'>New Topic</h1>

                <form onSubmit={handleGenerate} className='space-y-4'>
                    <input
                        type='text'
                        placeholder='Enter a topic to study...'
                        className='w-full p-3 border rounded'
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />

                    <button
                        type='submit'
                        disabled={loading}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50'
                    >
                        {loading ? "Generating..." : "Generate"}
                    </button>
                </form>
            </div>
        </>
    );
}
