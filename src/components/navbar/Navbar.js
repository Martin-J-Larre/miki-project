import React, {useState} from 'react';
import {Link} from 'react-router-dom';


export function Navbar({
    backgroundColor,
    fontColor,
    brand,
    links
}){

    const [isMenuClosed, setMenuClosed] = useState(true);

    return(
        <div className="nav-container" style={{backgroundColor: backgroundColor, color: fontColor}}>
        <nav>
            <div>
                <Link to='/' className='nav-brand' id='brand-resp'>{brand}</Link>
            </div>
            <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!isMenuClosed)}>☰</div>
            <div className="nav-links nav-menu">
                <Link className='link-btn btn-link-desk' to='/about' style={{ color: fontColor }}>About</Link>
                <Link className='link-btn btn-link-desk' to='/publications' style={{ color: fontColor }}>Publications</Link>
                <Link className='link-btn btn-link-desk' to='/news' style={{ color: fontColor }}>News</Link>
                <Link className='link-btn btn-link-desk' to='/events' style={{ color: fontColor }}>Events</Link>
                <Link className='link-btn btn-link-desk contact-link' to='/contact' style={{ color: fontColor }}>Contact</Link>
            </div> 
        </nav>
        <div className={`overlay-container${isMenuClosed ? "-hidden" : "-show"}`}>
            <div style={{backgroundColor: backgroundColor}}>
                <div className="overlay-buttonClose" onClick={() => setMenuClosed(!isMenuClosed)}><span>&times;</span></div>
                <div className="overlay-menu-wrapper">
                    <div className="overlay-menu">
                        {links.map((node) =>{
                            return(<Link key={node.text} to={node.link} onClick={() => setMenuClosed(!isMenuClosed)} className="overlay-menu-item" style={{color: fontColor}}>{node.text}</Link>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

Navbar.defaultProps = {
    backgroundColor : '#867c7c;',
    fontColor: 'white',
    brand: 'MIKI ARNDT',
    links:[
        {text: "Home", link:"/home"},
        {text: "About", link:"/about"},
        {text: "Publications", link:"/publications"},
        {text: "News", link:"/news"},
        {text: "Events", link:"/events"},
        {text: "Contact", link:"/contact"},
    ]
}