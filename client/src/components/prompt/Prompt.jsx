import Upload from "../upload/Upload";
import { useState } from "react";
import "./prompt.css";
import { IKImage } from "imagekitio-react";
import Loader from "../Loader";

const Prompt = () => {
  const [imageState, setImageState] = useState({
    isLoading: false,
    error: "",
    data: ""
  });

  return (
    <form className="promptForm">
      {imageState.isLoading && <Loader />}

      {!!imageState.data && !imageState.isLoading && (
        <IKImage path={imageState.data?.filePath} width={32} height={32} />
      )}

      <Upload setImageState={setImageState} />
      <input type="text" placeholder="Ask me anything..." />
      <button>
        <img src="/arrow.png" alt="" />
      </button>
    </form>
  );
};

export default Prompt;
