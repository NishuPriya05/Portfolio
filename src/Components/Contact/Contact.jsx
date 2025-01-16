import "./Contact.css";
import contact from "../../assets/contact.png";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".cnt-heading", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".cnt-heading",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from(".leftcontact img", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "form",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
  });
  return (
    <div id="contact">
      <center>
        <h1 className="cnt-heading">CONTACT ME</h1>
      </center>
      <div className="cnt">
        <div className="contact-imgs">
          <div className="leftcontact">
            <img src={contact} alt="" />
          </div>
        </div>

        <div className="rightcontact">
          <form action="https://formspree.io/f/xnnnrvqr" method="POST">
            <input
              className="firstinput"
              name="Username"
              type="text"
              placeholder="Full Name"
            />
            <input name="Email" type="email" placeholder="Enter your email" />
            <textarea
              name="message"
              id="textarea"
              placeholder="message me"
            ></textarea>
            <input className="sbmtbtn" type="submit" id="btn" value="Submit" />
          </form>
        </div>
      </div>
      <div className="icon">
        <a
          href="https://linkedin.com/in/nishu-priya-427240330"
          target="_blank"
          className="items"
        >
          <CiLinkedin />
        </a>
        <a href="https://x.com/NishuPriya05" target="_blank" className="items">
          <FaSquareXTwitter />
        </a>
        <a
          href="https://github.com/NishuPriya05"
          target="_blank"
          className="items"
        >
          <FaGithubSquare />
        </a>
        <a
          href="mailto:priyanishu0503@gmail.com"
          target="_blank"
          className="items"
        >
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
