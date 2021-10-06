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
            <div className="profileBox">
                <ul>
                    <Link to="/">
                    <li className="navBtn">Home</li>
                    </Link>
                    <Link to="/routines">
                    <li className="navBtn">My Routines</li>
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
                <ul>
                    <Link to="/">
                    <li className="navBtn">Home</li>
                    </Link>
                    <Link to="/routines">
                    <li className="navBtn">Routines</li>
                    </Link>
                    <Link to="/activities">
                    <li className="navBtn">Activities</li>
                    </Link>
                </ul>
            </nav>}
    </div>
    </>
    ) 
}

export default Header;

