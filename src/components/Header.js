import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {removeCurrentUserToken, removeCurrentUsername}
from '../auth'
const Header = ({userToken, setUserToken, setMyUsername}) => {
let history = useHistory()	
    return(
        <>
        <div id="header">
        {userToken? <nav>
            <div className="header">
                <ul>
                    <Link to="/home">
                    <li className="navBtn">Home</li>
                    </Link>
                    <Link to="/myroutines">
                    <li className="navBtn">My Routines</li>
                    </Link>
                    <Link to="/routines">
                    <li className="navBtn">All Routines</li>
                    </Link>
                    <Link to="/activities">
                    <li className="navBtn">Activities</li>
                    </Link>
                    <button className="navBtn"
                        onClick={() => {
                        setUserToken(removeCurrentUserToken());
                        setMyUsername(removeCurrentUsername());
                    history.push("/");
                    }}>LOGOUT
                    </button>
                </ul>
            </div>
            </nav>:
            <nav>
                <div className="header">
                <ul>
                    <Link to="/home">
                    <li className="navBtn">Home</li>
                    </Link>
                    <Link to="/routines">
                    <li className="navBtn">Routines</li>
                    </Link>
                    <Link to="/activities">
                    <li className="navBtn">Activities</li>
                    </Link>
                </ul>
                </div>
            </nav>}
    </div>
    </>
    ) 
}

export default Header;

