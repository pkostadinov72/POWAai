import Upload from "../upload/Upload";
import { useState } from "react";
import "./prompt.css";
import { IKImage } from "imagekitio-react";
import Loader from "../Loader";

const Prompt = ({ handlePrompt }) => {
  const [imageState, setImageState] = useState({
    isLoading: false,
    error: "",
    data: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let prompt = e.target.prompt.value;

    if (!prompt) return;

    handlePrompt(prompt);
  };

  return (
    <form className="promptForm" onSubmit={handleSubmit}>
      {imageState.isLoading && <Loader />}

      {!!imageState.data && !imageState.isLoading && (
        <IKImage path={imageState.data?.filePath} width={32} height={32} />
      )}

      <Upload setImageState={setImageState} />
      <input type="text" name="prompt" placeholder="Ask me anything..." />
      <button>
        <img src="/arrow.png" alt="" />
      </button>
    </form>
  );
};

export default Prompt;
