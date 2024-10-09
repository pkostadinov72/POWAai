import Upload from "../upload/Upload";
import { useState } from "react";
import "./prompt.css";
import { IKImage } from "imagekitio-react";
import Loader from "../Loader";

const Prompt = ({ handlePrompt }) => {
  const [file, setFile] = useState({
    isLoading: false,
    error: "",
    data: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const promptText = e.target.prompt.value;

    const prompt = file.data
      ? { text: promptText, file: file.data }
      : { text: promptText };

    if (!file && !promptText) return;

    handlePrompt(prompt);
  };

  return (
    <form className="promptForm" onSubmit={handleSubmit}>
      {file.isLoading && <Loader />}

      {/* TODO add image error handling */}

      {!!file.data && !file.isLoading && (
        <IKImage path={file.data?.filePath} width={32} height={32} />
      )}

      <Upload setFile={setFile} />
      <input type="text" name="prompt" placeholder="Ask me anything..." />
      <button>
        <img src="/arrow.png" alt="" />
      </button>
    </form>
  );
};

export default Prompt;
