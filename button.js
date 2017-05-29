import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, iconSrc, onClick, type }) => (
  <button onClick={onClick} className={type}>
    { iconSrc && <img src={iconSrc} />}
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  iconSrc: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
