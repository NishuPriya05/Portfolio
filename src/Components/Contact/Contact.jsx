import "./Contact.css";
import contact from "../../assets/contact.png";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact">
      <center>
        <h1 className="cnt-heading">CONTACT ME</h1>
      </center>
      <div className="cnt">
        <div className="contact-imgs">
          <div
            className="leftcontact"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={contact} alt="" />
          </div>
        </div>

        <div
          className="rightcontact"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
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
      <div className="icon" data-aos="zoom-in-up" data-aos-duration="1000">
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
