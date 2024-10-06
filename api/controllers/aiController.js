import { generateContent } from "../models/aiModel.js";

export const generatePrompt = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const generatedContent = await generateContent(prompt);
    res.json(generatedContent);
  } catch (error) {
    console.error("Error generating prompt:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
};
