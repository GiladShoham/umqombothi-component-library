import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css'

const propTypes ={
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    login:PropTypes.bool
}

const PrimaryButton = ({
    className = "",
    onClick,
    text,
    disabled = false,
    login
}) => {
    if(login){
       return (
            <button
            className={`bg-pmb-pink-darkest text-white font-bold py-2 px-4 rounded-lg  ${className}`}
            onClick={onClick}
            disabled={disabled}
            >
              { text }
              {login ? 'Login' : 'Sign Up'}
            </button>
        )
    } else {
     return   (
            <button
            className={`primary  ${className}`}
            onClick={onClick}
            disabled={disabled}
            >
              { text }
            </button>
        )
    }
};

PrimaryButton.propTypes = propTypes;
export default PrimaryButton;
