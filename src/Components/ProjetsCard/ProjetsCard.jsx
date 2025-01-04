import './ProjetsCard.css'
import PropTypes from "prop-types";
const ProjetsCard = ({title, image, main}) => {
  return (
    <>
      <div className="prjctcard">
         <img src={image} alt="" />
         <h3 className='cardtitle'>
            {title}
         </h3>
         <p className='description'>{main}</p>
         <button className="btn">Demo</button>
         <button className="btn">Source Code</button>
      </div>

      <div>
         
      </div>
    </>
  )
}
ProjetsCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
};
export default ProjetsCard
