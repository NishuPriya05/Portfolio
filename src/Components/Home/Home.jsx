import "./Home.css";
import image from "../../assets/image.png";
import { Link } from "react-scroll";
import TypingEffect from "react-typing-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    });

    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <div id="home">
      <div className="lefthome">
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
      <div className="righthome">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Home;
