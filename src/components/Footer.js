import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <nav>
                    <Link to="/login">
                    <div className="btn">LOGIN</div>
                    </Link>
                    <Link to="/register">
                    <div className="btn">REGISTER</div>
                    </Link>
                </nav>
            </footer>
        </>
    )
}
export default Footer;