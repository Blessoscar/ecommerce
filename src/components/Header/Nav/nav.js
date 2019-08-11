import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="collapse navbar-collapse" id="myNavbar" style={{padding:'0'}}>
            <ul className="nav navbar-nav navbar-left">
                <li>
                    <Link to="/news">
                        NEWS
                    </Link>
                </li>
                <li>
                    <Link to='/blog'>
                        BLOG
                    </Link>
                </li>
                <li>
                    <Link to='/blog'>
                        GAMES
                    </Link>
                </li>
                <li>
                    <Link to='/news'>
                        PRESENTATIONS
                    </Link>
                </li>
                <li>
                    <Link to='/news'>
                        RECENT PUBLICATIONS
                    </Link>
                </li>
                <li>
                    <Link to='/blog'>
                        GAMES RESEARCH LAB
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;