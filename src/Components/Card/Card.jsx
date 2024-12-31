import "./Card.css";
import PropTypes from "prop-types";

function Card({ title, image }) {
  console.log("Card Props:", { title, image });
  return (
    <div className="card">
      <h1>{title}</h1>

      <div className="hovercard">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Card;
