import "./style.css";
import PropTypes from 'prop-types';

const Card = ({ title, discription,image }) => {
  return (
    <div className="card">
      <a href="#"><img src={image} alt="" /></a>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{discription}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
    title: PropTypes.string,
    discription:  PropTypes.string,
    image:PropTypes.string
  };
  
