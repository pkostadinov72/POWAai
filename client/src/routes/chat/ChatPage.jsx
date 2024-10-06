import "./chatPage.css";
import { useEffect, useRef, useState } from "react";
import Prompt from "../../components/prompt/Prompt";
import Markdown from "react-markdown";
import { postPrompt } from "../../api/powa";

const ChatPage = () => {
  const endRef = useRef(null);

  const [question, setQuestion] = useState("");
  const [answer, setAnswear] = useState("");

  const handlePrompt = async (prompt) => {
    setQuestion(prompt);

    const response = await postPrompt(prompt);

    setAnswear(response);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [answer, question]);

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          {question && <div className="message user">{question}</div>}
          {answer && (
            <div className="message">
              <Markdown>{answer}</Markdown>
            </div>
          )}
          <div ref={endRef} className="endChat" />
          <Prompt handlePrompt={handlePrompt} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
