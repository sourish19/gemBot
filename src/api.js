import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const apiCall = async (userInput) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userInput,
  });
  return response.text;
};

export default apiCall;
