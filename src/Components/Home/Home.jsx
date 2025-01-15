import "./Home.css";
import image from "../../assets/image.png";
import { Link } from "react-scroll";
import TypingEffect from "react-typing-effect";

function Home() {
  return (
    <div id="home">
      <div className="lefthome" data-aos="fade-left" data-aos-duration="1000">
        <div className="homedetails">
          <div className="line1">I&apos;M</div>
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

          <Link to="contact" smooth={true}>
            <button>Hire Me</button>
          </Link>
        </div>
      </div>
      <div className="righthome" data-aos="fade-right" data-aos-duration="1000">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Home;
