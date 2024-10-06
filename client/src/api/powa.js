export const postPrompt = async (prompt) => {
  const API_URL = import.meta.env.VITE_API;

  try {
    const response = await fetch(`${API_URL}/powa/generate-prompt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error generating prompt:", error);
    throw error;
  }
};
