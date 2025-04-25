

import axios from "axios";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 



const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;



export const generateStudyMaterial = async (topic) => {
  try {
    const response = await axios.post(
      GEMINI_ENDPOINT,
      {
        contents: [
          {
            parts: [{
              text: `Generate study material for the topic: "${topic}".
Return the response strictly as a JSON object with three properties:
1. "notes": a detailed explanation of the topic.
2. "quiz": an array of 3 multiple-choice questions. Each question should be an object with "question", "options" (array), and "answer".
3. "flashcards": an array of flashcards, where each item has "front" and "back". Do not wrap the JSON in markdown or triple backticks.`
            }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    // 👇 Strip triple backticks and any markdown formatting
    text = text.replace(/```json|```/g, '').trim();

    const parsed = JSON.parse(text);
    
    return parsed;
    
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error;
  }

 
};



























// export const generateStudyMaterial = async (topic) => {
//   try {
//     const response = await axios.post(
//       GEMINI_ENDPOINT,
//       {
//         contents: [
//           {
//             parts: [{
//               text: `Generate study material for the topic: "${topic}".
// Return the response strictly as a JSON object with three properties:
// 1. "notes": a detailed explanation of the topic.
// 2. "quiz": an array of 3 multiple-choice questions. Each question should be an object with "question", "options" (array), and "answer".
// 3. "flashcards": an array of flashcards, where each item has "front" and "back".`
//             }],
//           },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
//     const parsed = JSON.parse(text);
//     return parsed;
//   } catch (error) {
//     console.error("Gemini API error:", error);
//     throw error;
//   }
// };





















/// this is pure content loaded

// export const generateStudyMaterial = async (topic) => {
//   try {
//     const response = await axios.post(
//       GEMINI_ENDPOINT,
//       {
//         contents: [
//           {
//             parts: [{ text: `Explain in detail: ${topic}` }],
//           },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
//     return text || "No content generated.";
//   } catch (error) {
//     console.error("Gemini API error:", error);
//     throw error;
//   }
// };
