import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container">
            <footer>
                <Link to='/'>
                    Back to Top
                </Link>
                <div>
                    Copyright blah blah blah
                </div>
            </footer>
        </div>
    );
};

export default Footer;