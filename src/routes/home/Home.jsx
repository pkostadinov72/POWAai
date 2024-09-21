import "./home.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="home">
      <img className="orbital" src="/orbital.png" />
      <div className="left">
        <h1>POWA AI</h1>
        <h2>OpenAI GPT clone, but it is open</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" className="bot" />
          <div className="chat">
            <img src="/bot.png" alt="" />
            <TypeAnimation
              sequence={[
                "Me: Who's the best coder ?",
                2000,
                "Powa: Volen Dakov!",
                2000,
                "Me: Who's the tallest human ?",
                2000,
                "Powa: Kaloyan Kolev!",
                2000
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: "24px", display: "inline-block" }}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
