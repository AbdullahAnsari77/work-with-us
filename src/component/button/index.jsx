import "./style.css";

// eslint-disable-next-line react/prop-types
const Button = ({ text,style }) => {
  return (
    <div>
      <button style={style}>{text}</button>
    </div>
    
  
  );
};

export default Button;
