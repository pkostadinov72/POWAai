import "./chatPage.css";
import { useEffect, useRef } from "react";
import Prompt from "../../components/prompt/Prompt";

const ChatPage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test Message</div>
          <div className="message user">
            Test Message from UserloremdddddddddddddaTest Message from
            UserloremdddddddddddddaTest Message from UserloremdddddddddddddaTest
            Message from UserloremdddddddddddddaTest Message from
            UserloremdddddddddddddaTest Message from Userloremddddddddddddda
          </div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message</div>
          <div className="message user">Test Message from User</div>
          <div className="message">Test Message</div>
          <div className="message user">
            Test Message from UserloremdddddddddddddaTest Message from
            UserloremdddddddddddddaTest Message from UserloremdddddddddddddaTest
            Message from UserloremdddddddddddddaTest Message from
            UserloremdddddddddddddaTest Message from Userloremddddddddddddda
          </div>
          <div ref={endRef} className="endChat" />
          <Prompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
