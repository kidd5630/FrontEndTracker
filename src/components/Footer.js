import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Footer = () => {
	
    return (
            <>
    <footer>
        <nav>
                <Link to="/login">
                <div className="navBtn">LOGIN</div>
                </Link>
                <Link to="/register">
                <div className="navBtn">REGISTER</div>
                </Link>
        </nav>
        </footer>
        </>
    )
}

export default Footer;