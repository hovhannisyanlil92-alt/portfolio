// import axios from "axios";

// const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// export const sendMessageToGemini = async (message: string) => {
//   try {
//     const response = await axios.post(
//        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
//       {
//         contents: [{ parts: [{ text: message }] }],
//       }
//     );
//     return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No Response";
//   } catch (err) {
//     console.error(err);
//     return "Error connecting to Gemini...";
//   }
// };







import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const sendMessageToGemini = async (message: string) => {
  // REMOVED console.log(API_KEY) for security
  
  try {
    const response = await axios.post(
      // Updated to v1beta and gemini-1.5-flash
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: message }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No Response";
    
  } catch (err: any) {
    console.error("Gemini API Error:", err.response?.data || err.message);
    
    // If it's still a 503, tell the user it's a temporary server issue
    if (err.response?.status === 503) {
      return "Google's AI service is currently busy. Please wait a moment and try again.";
    }
    
    return "An error occurred. Please check your internet or API key.";
  }
};