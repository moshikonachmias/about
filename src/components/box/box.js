import React from 'react';
import PropTypes from 'prop-types';
import './box.scss';
import { Link } from "react-router-dom";

Box.propTypes = {
    text: PropTypes.string,
};

function Box({ text, link }) {
    if (link != null && link.indexOf('http') !== -1) {
        return (
            <a className='box' href={link} target="_blank" rel='noreferrer noopener'>
                <span className='box-title'>{text}</span>
                <hr className='box-hr'/>
            </a>
        );
    } else {
        return (
            <Link className='box' to={link}>
                <span className='box-title'>{text}</span>
                <hr className='box-hr'/>
            </Link>
        );
    }

}

export default Box;