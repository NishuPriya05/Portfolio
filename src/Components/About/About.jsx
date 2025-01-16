import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".abt", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".abt",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
  });
  return (
    <>
      <div id="about">
        <center>
          <h1 className="abt">ABOUT</h1>
        </center>
        <div className="leftabout">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li>
                  <span>NAME</span> : NISHU PRIYA
                </li>
                <li>
                  <span>AGE</span> : 21 YEARS
                </li>
                <li>
                  <span>GENDER</span> : FEMALE
                </li>
                <li>
                  <span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
                </li>
              </ul>
            </div>
            <div className="education">
              <h1>EDUCATION</h1>
              <ul>
                <li>
                  <span>DEGREE</span> : BTECH
                </li>
                <li>
                  <span>BRANCH</span> : COMPUTER SCIENCE AND ENGINEERING
                </li>
                <li>
                  <span>CGPA</span> : 8.4
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
