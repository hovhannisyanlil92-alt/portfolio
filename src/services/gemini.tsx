import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const sendMessageToGemini = async (message: string) => {
  console.log(API_KEY)
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
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

  } catch (err) {
    console.error(err);
    return "Error... ";
  }
};