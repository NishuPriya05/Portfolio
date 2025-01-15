import Card from "../SkillsCard/SkillsCard";
import "./Skills.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import mongodb from "../../assets/mongodb.png";
import react from "../../assets/react.png";

function Skills() {
  console.log(html, css, javascript, mongodb, react);
  return (
    <div id="skills">
      <div className="skiltxt">
        <center>
          {" "}
          <h1 className="skills">SKILLS</h1>
        </center>
        {/* <hr className="hrr" /> */}
      </div>
      <div className="container">
        <div className="item">
          <div className="one" data-aos="flip-left" data-aos-duration="1000">
            <Card title="HTML" image={html} />
            <Card title="CSS" image={css} />
          </div>
          <div className="two" data-aos="flip-left" data-aos-duration="1000">
            <Card title="JAVASCRIPT" image={javascript} />
            <Card title="MONGODB" image={mongodb} />
          </div>
          <div className="three" data-aos="flip-left" data-aos-duration="1000">
            <Card title="REACT" image={react} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
