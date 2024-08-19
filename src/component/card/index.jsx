import "./style.css";
import PropTypes from "prop-types";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <a href="#">
        <img src={image} alt="" />
      </a>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
