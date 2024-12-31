import "./Skills.css";
import Card from "../Card/Card";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import mongodb from "../../assets/mongodb.png";
import react from "../../assets/react.png";

function Skills() {
   console.log(html, css, javascript, mongodb, react);
  return (
    <div id="skills">
      
        <h1 className="skills">SKILLS</h1>
        <div className="container">
         <div className="item">
        <Card title="HTML" image={html} />
        <Card title="CSS" image={css} />
        <Card title="JAVASCRIPT" image={javascript} />
        <Card title="MONGODB" image={mongodb} />
        <Card title="REACT" image={react} />
      </div>
      </div>
    </div>
  );
}

export default Skills;
