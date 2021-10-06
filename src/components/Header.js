import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
	
    return <header>
        <h1>Fitness Tracker</h1>
            <nav>
                <Link className="navLink" exact to="/">Home</Link>
                <Link className="navLink" exact to="/routines">Routines</Link>
            </nav>
        </header>
}

export default Header;