import "./ProjetsCard.css";
import PropTypes from "prop-types";
const ProjetsCard = ({ title, image, main, sourceCode, demoLink }) => {
  return (
    <>
      <div className="prjctcard">
        <center>
          <div className="projectImg">
            <img src={image} alt="" />
          </div>
        </center>
        <h3 className="cardtitle">{title}</h3>
        <p className="description">{main}</p>
        <div className="projects-btn">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Demo
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Code
          </a>
        </div>
      </div>
    </>
  );
};
ProjetsCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  sourceCode: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
};
export default ProjetsCard;
