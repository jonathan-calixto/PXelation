import React from 'react';
import {menuItems} from './navbar_items';

export default class NavBar extends React.Component{
    render(){
        return(
            <div className='nav-links-bar'>
                <div className='logo'>
                    <img src="../../../app/assets/images/pxelation_logo.png" alt=""/>
                </div>
                <div className='links'>
                    <ul className='listed-items'>
                        <li key='logo'><a className='nav-links' href="/#/">PXelation</a></li>
                        <li key='discover'><a className='nav-links' href="/#/photos/">Discover</a></li>
                        {menuItems.map((item, idx) => {
                            return(
                                <li key={idx}>
                                    <a target='_blank' className={item.className} href={item.url}>{item.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
