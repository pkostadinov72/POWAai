import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory
} from "@google/generative-ai";
import axios from "axios";

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
  }
];

const genAI = new GoogleGenerativeAI(process.env.GEMINI_PUBLIC_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings: safetySettings
});

const fileToGenerativePart = async (file) => {
  try {
    const response = await axios.get(file.url, { responseType: "arraybuffer" });
    const base64Data = Buffer.from(response.data, "binary").toString("base64");

    return {
      inlineData: {
        data: base64Data,
        mimeType: file.fileType
      }
    };
  } catch (error) {
    console.error("Error processing file:", error);
    throw new Error("Failed to process file");
  }
};

export const generateContent = async (prompt) => {
  try {
    if (prompt.file) {
      const generativePart = await fileToGenerativePart(prompt.file);
      prompt = [generativePart, prompt.text];
    } else {
      prompt = prompt.text;
    }

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(error);
    throw new Error("Error generating content");
  }
};
