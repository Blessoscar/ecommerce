import React from 'react';
import Nav from './Nav/nav';
import {Link } from 'react-router-dom'

const Header = () => {
    return (
        <div style={{padding:'10px'}}>
            <Link to='/'>
                <img src="/images/logo.png" alt="Logo" className="img img-responsive" style={{width:'60px'}}></img>
            </Link>
            
            <p style={{fontSize:'10px'}}>Joy Lee akhdfjhakjdf-afjadkjf</p>

            <nav className="navbar navbar-default" style={{marginBottom: "0px"}}>
            <div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                </div>
                <Nav/>
            </div>
          </nav>
            
        </div>
    );
};

export default Header;