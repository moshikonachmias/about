import React from 'react';
import PropTypes from 'prop-types';
import './box.scss';

Box.propTypes = {
    text: PropTypes.string,
};

function Box({ text, link }) {
    return (
        <a className='box' href={link} target="_blank" rel='noreferrer noopener'>
            <span className='box-title'>{text}</span>
            <hr className='box-hr'/>
        </a>
    );
}

export default Box;