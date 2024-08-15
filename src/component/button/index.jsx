import "./style.css";
import PropTypes from 'prop-types';
const Button = ({ text,style }) => {
  return (
    <div>
      <button style={style}>{text}</button>
    </div>
    
  
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
 style:PropTypes.any
}