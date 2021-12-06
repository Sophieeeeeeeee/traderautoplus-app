// Button class for rendering button objects with specified look associated with Button.css style sheet
// For now this is just used for rendering welcome page buttons

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// both are class names in style sheet, by making class name one of them, rendered outcome is specified
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

/**
 * Output a button object(function) with passed parameters (designated looks to be rendered (displayed) and onclick behaviours)
 * @param  {button} children other buttons that also need to be rendered (or whatever also need to be displayed along)
 * @param  {String} type   button type
 * @param  {fuonClick  onClick behaviour of this button
 * @param  {String} buttonStyle button style to be rendered (according to css file)
 * @param  {String} buttonSize button size to be rendered (according to css file)
 */
export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize,
                           link
                       }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; // if no button style, default to idx 0, 'btn--primary'

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];// if no button size, default to idx 0, 'btn--medium'

    return (
        <Link to={link} className='btn-mobile'>
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