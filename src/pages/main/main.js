import React from 'react';
import PropTypes from 'prop-types';
import Box from "../../components/box/box";
import './main.scss'
import flag from '../../assets/icons/flag.svg';
import location from '../../assets/icons/location.svg';
import emplo from '../../assets/icons/emplo.svg';
import fb from '../../assets/icons/fb.svg';
import instegramIcon from '../../assets/icons/instegramIcon.svg';
import linkedinIcon from '../../assets/icons/linkedinIcon.svg';
import money from '../../assets/icons/money.svg';
import twitter from '../../assets/icons/twitter.svg';
import cover from '../../assets/cover.svg';

Main.propTypes = {};

function Main(props) {
    const social = [
        {
            icon: fb,
            src: 'https://www.facebook.com/To.GongIO/'
        },
        {
            icon: twitter,
            src: 'https://twitter.com/gong_io/'
        },
        {
            icon: linkedinIcon,
            src: 'https://www.linkedin.com/company/gong-io/'
        },
        {
            icon: instegramIcon,
            src: 'https://www.instagram.com/gong.io/'
        },
    ]

    const headers = [
        {
            src: location,
            title: 'LOCATION',
            subtitle: 'TLV | SF'
        },
        {
            src: money,
            title: 'RAISED',
            subtitle: '$134M'
        },
        {
            src: flag,
            title: 'FOUNDED IN',
            subtitle: '2015'
        },
        {
            src: emplo,
            title: 'EMPLOYEES',
            subtitle: '300+'
        },
    ]

    const sections = [
        {
            header: 'GET TO KNOW US',
            items: [
                {
                    text: 'OUR PRODUCT',
                    link: 'https://gongio.wistia.com/medias/tipvy2yml4'
                },
                {
                    text: 'OUR MINDSET',
                    link: 'https://www.youtube.com/watch?v=THVsB7_Ws4o&feature=emb_title'
                },
                {
                    text: 'TRENDING NOW',
                    link: '/trending'
                }],
        },
        {
            header: 'WHy YOU SHOULD JOIN US',
            items: [
                {
                    text: 'REVIEWS',
                    link: 'https://www.g2.com/products/gong/reviews#reviews'
                },
                {
                    text: 'GONGSTERS',
                    link: 'https://www.glassdoor.com/Overview/Working-at-Gong-EI_IE1722176.11,15.htm'
                },
                {
                    text: 'CULTURE',
                    link: '/culture'
                }],
        }
    ]

    return (
        <div id='main'>
            <img className='cover-img'
                 src={cover} alt='cover'/>
            <div className='header'>
                {headers.map(({ src, title, subtitle }) => {
                    return <div className='header-item'>
                        <img className='header-img' src={src} alt={title}/>
                        <span className='title icon-title'>{title}</span>
                        <span className='header-subtitle'>{subtitle}</span>
                    </div>
                })}

            </div>
            {sections.map(({ header, items }) => {
                return (<>
                    <h1 className='title section-title'>{header}</h1>
                    <div className='section'>
                        {items.map(({ text, link }) => {
                            return <Box text={text} link={link}/>
                        })}
                    </div>
                </>)
            })}
            <div className='footer'>
                {social.map(({ icon, src }) => {
                    return (<div className='footer-item'>
                        <a href={src} target="_blank" rel="noreferrer noopener">
                            <img className='footer-img' src={icon} alt={src}/>
                        </a>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default Main;