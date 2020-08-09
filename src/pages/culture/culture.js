import React from 'react';
import './culture.scss'
import cook from '../../assets/culture/cook.png';
import office from '../../assets/culture/office.png';
import swag from '../../assets/culture/swag.png';
import volunteer from '../../assets/culture/volunteer.png';
import celebrate from '../../assets/culture/celebrate.png';
import arrow_back from '../../assets/icons/arrow_back.svg';
import { Link } from "react-router-dom";

Culture.propTypes = {};

function Culture(props) {
    const mainCulture = [
        {
            text: 'OFFICE',
            img: office
        },
    ]
    const culture = [
        {
            text: 'VOLUNTEER',
            img: volunteer
        },
        {
            text: 'CELEBRATE',
            img: celebrate
        },
        {
            text: 'COOK',
            img: cook
        },
        {
            text: 'SWAG',
            img: swag
        },
    ]

    return (
        <div id='culture'>
            <div>
                <Link className='' to='/'>
                    <img className='culture-section-img' src={arrow_back} alt='back'/>
                </Link>
                <div>
                    <span className='culture-title'>CULTURE</span>
                    <hr className='culture-hr'/>
                </div>
            </div>
            <div className='culture-item__wide'>
                <div className='culture-item-content'>
                    <span className='culture-text'>{mainCulture[0].text}</span>
                    <div className="culture-img-container">
                        <img className='culture-img' src={mainCulture[0].img} alt={mainCulture[0].text}/>
                    </div>
                </div>
            </div>
            <div id='culture-content'>
                {culture.map(({ text, img }) => {
                    return <div className='culture-item'>
                        <div className='culture-item-content'>
                            <span className='culture-text'>{text}</span>
                            <div className="culture-img-container">
                                <img className='culture-img' src={img} alt={text}/>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Culture;