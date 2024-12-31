import "./Home.css";
import man from "../../assets/man.png";
import TypingEffect from "react-typing-effect";

function Home() {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">NISHU PRIYA</div>
          <div className="line3">
            <TypingEffect
              text={["FRONTEND DEVELOPER"]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
              cursor="|"
            />
          </div>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
