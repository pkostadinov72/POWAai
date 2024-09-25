import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Powa AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Chat Title</Link>
        <Link to="/">Last Chat Title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Powa AI Premium</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
