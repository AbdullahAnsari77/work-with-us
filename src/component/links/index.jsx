import "./style.css";
import PropTypes from "prop-types";

const LinkItem = ({ image, titles }) => {
  return (
    <div className="links">
      <a href="#">
        <img src={image} alt="" />
      </a>
      <h4 className="">{titles}</h4>
    </div>
  );
};
export default LinkItem;

LinkItem.propTypes = {
  titles: PropTypes.string,
  image: PropTypes.string,
};
