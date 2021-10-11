import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {removeCurrentUserToken, removeCurrentUsername}
from '../auth'
import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';



const Top = styled.header`
  font-family: "Akaya Telivigala", cursive;
  font-weight: 100;
  font-style: italic;
  font-size: 25px;
  text-align: center;
  padding: 0.25em 0;
  background: #033a8d;;
  color: #fafafa;
`;

const Header = ({userToken, setUserToken, setMyUsername}) => {
let history = useHistory()	
    return(
        <>
        <Top>
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
                        <button className="logOut"
                            onClick={() => {
                            setUserToken(removeCurrentUserToken());
                            setMyUsername(removeCurrentUsername());
                        history.push("/");
                        }}><LogoutIcon></LogoutIcon> LOGOUT
                        </button>
                    </ul>
                </div>
                </nav>
                :
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
                            <Link to="/login">
                            <li className="navBtn"> LOGIN</li>
                            </Link>
                            <Link to="/register">
                            <li className="navBtn">REGISTER</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            }
        </Top>
    </>
    ) 
}

export default Header;

