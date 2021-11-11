import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize
                       }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; // if no button style, default to idx 0, 'btn--primary'

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}  // how we change display based on what's passed, we set it as class name
                onClick={onClick}
                type={type}
            >
                {children} {/*//children = button, children button displayed*/}
            </button>
        </Link>
    );
};