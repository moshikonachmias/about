import React from 'react';
import './trending.scss'
import amit from '../../assets/trendings/amit.png';
import eilon from '../../assets/trendings/eilon.png';
import vayo from '../../assets/trendings/vayo.png';
import gong from '../../assets/trendings/gong.png';
import globes from '../../assets/trendings/globes.png';
import activity from '../../assets/trendings/activity.png';
import arrow from '../../assets/icons/arrow.svg';
import arrow_back from '../../assets/icons/arrow_back.svg';
import { Link } from "react-router-dom";

Trending.propTypes = {};

function Trending(props) {
    const trends = [
        {
            text: 'GONG RAISES $200 MILLION IN SERIES D FUNDING AT $2.2 BILLION VALUATION',
            title: 'GLOBES',
            section: 'ARTICLE',
            img: globes,
            link: 'https://www.globes.co.il/news/article.aspx?did=1001339128'
        },
        {
            text: 'Gong acquires early-stage startup Vayo',
            title: 'GEEKTIME',
            section: 'ARTICLE',
            img: vayo,
            link: 'https://www.geektime.co.il/gong-acquired-vayo/'
        },
        {
            text: 'HOW TO BUILD A UNICORN IN 3 YEARS',
            author: 'AMIT BENDOV',
            title: 'CEO & CO-FOUNDER',
            section: 'PODCAST',
            img: amit,
            link: 'https://www.calcalist.co.il/internet/articles/0,7340,L-3777059,00.html'
        },
        // {
        //     text: 'How we built a feature that connects remote sales teams',
        //     author: 'Eilon RESHEF',
        //     title: 'CPO & CO-founder',
        //     section: 'Webiner',
        //     img: eilon,
        //     link: 'https://www.facebook.com/watch/live/?v=2606843969642483&ref=watch_permalink'
        // },
        {
            text: 'GEEKTIME Insider',
            section: 'COMPANY PROFILE',
            img: gong,
            link: 'https://insider.geektime.co.il/organizations/gong-io'
        },
        // {
        //     text: 'How we built a feature that connects remote sales teams — in two weeks',
        //     section: 'Article',
        //     img: activity,
        //     link: 'https://medium.com/gong-tech-blog/how-we-built-a-feature-that-connects-remote-sales-teams-in-two-weeks-c321002c7209'
        // },
    ]

    return (
        <div id='trends'>
            <div>
                <Link className='' to='/'>
                    <img className='trends-section-img' src={arrow_back} alt='back'/>
                </Link>
                <div>
                    <span className='trends-title'>TRENDING NOW</span>
                    <hr className='trends-hr'/>
                </div>
            </div>
            <div id='trends-content'>
                {trends.map(({ text, author, title, section, img, link }) => {
                    return <a href={link} target='_blank' rel='noopener noreferrer' className='trends-item'>
                        <div className="trends-img-container">
                            <img className='trends-img' src={img} alt={title}/>
                        </div>
                        <div className='trends-item-content'>
                            <span className='trends-text'>{text}</span>
                            <div className='trends-author'>
                                {author && <div>
                                    <span>{author},</span>
                                    <br/>
                                </div>}
                                {title && <span>{title}</span>}
                            </div>
                            <div className='trends-section'>
                                <span className='trends-section-title'>{section}</span>
                                <img className='trends-section-img' src={arrow} alt={section}/>
                            </div>
                        </div>
                    </a>
                })}
            </div>
        </div>
    );
}

export default Trending;