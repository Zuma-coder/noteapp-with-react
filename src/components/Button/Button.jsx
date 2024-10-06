import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
