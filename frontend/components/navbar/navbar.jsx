import React from 'react';
import {Link} from 'react-router-dom';
import {menuItems} from './navbar_items';

export default class NavBar extends React.Component{
    render(){
        return(
            <div className='nav-links-bar'>
                <h1 className='logo'>
                    PXelation
                </h1>
                <div className='links'>
                    <ul className='listed-items'>
                        {menuItems.map((item, idx) => {
                            return(
                                <li key={idx}>
                                    <a className={item.className} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
