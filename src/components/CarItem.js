import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders each car item on browse page
 * @props  {String} path click on each image to get to this path
 * @props  {String} label label rendered
 * @props  {String} src file path to car image
 * @props  {String} text text under img rendered
 */
function CarItem(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt='Car Image'
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CarItem;