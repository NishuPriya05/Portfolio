import Card from "../SkillsCard/SkillsCard";
import "./Skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import mongodb from "../../assets/mongodb.png";
import react from "../../assets/react.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useGSAP(() => {
    gsap.from(".skills", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".skills",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from(".one", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".one",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from(".two", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".two",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from(".three", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".two",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
  });

  console.log(html, css, javascript, mongodb, react);
  return (
    <div id="skills">
      <div className="skiltxt">
        <center>
          <h1 className="skills">SKILLS</h1>
        </center>
      </div>

      <div className="container">
        <div className="item">
          <div className="one">
            <Card title="HTML" image={html} />
            <Card title="CSS" image={css} />
          </div>
          <div className="two">
            <Card title="JAVASCRIPT" image={javascript} />
            <Card title="MONGODB" image={mongodb} />
          </div>
          <div className="three">
            <Card title="REACT" image={react} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
