import axios from "axios";
import { LILIT_CONTEXT } from "./constants"; 

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const sendMessageToGemini = async (message: string) => {
    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                system_instruction: {
                    parts: [{ text: LILIT_CONTEXT }]
                },
                contents: [
                    {
                        parts: [{ text: message }]
                    }
                ]
            }
        );

        return response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No Response";
    } catch (err: any) {
        console.error("Gemini API Error:", err.response?.data || err.message);
        if (err.response?.status === 503) {
         return "Google's AI service is currently busy. Please wait a moment and try again.";
        }
        return "An error occurred. Please try again.";
    }
};