import React from 'react';

import { useHistory } from "react-router-dom";

import {
    BASE_URL,
    fetchLoginUser,
    fetchUsersRoutines
} from '../api';

const Login = ({setMyPassword, myPassword, setusersRoutines, setMyUsername, myUsername, setUserToken}) => {

    let history = useHistory();
    
    async function loginUser(event) {
        event.preventDefault();
        try {
            const results = await fetchLoginUser(BASE_URL, myUsername, myPassword);
            if(results.user) {
                const token = await results.token;
                setUserToken(token);
                setMyUsername(myUsername);
                localStorage.setItem('userToken', token);
                localStorage.setItem('myUsername', JSON.stringify(myUsername));
                const routines = await fetchUsersRoutines(myUsername, token)
                setusersRoutines(routines)
                history.push("/");
            } else {
                alert("Your Username Or Password Is Incorrect");
            }
        } catch(error) {
            console.error(error);
        } 
    }

    return (
        <section className="loginContainer" >
            <h1 className="loginTitle">Login</h1>
                <form className="loginForm" onSubmit={loginUser}>
                    <div>
                        <input type="username" placeholder="Username" className="loginInput" onChange={(event) => {setMyUsername(event.target.value)}} required/>
                    </div>
                    <br></br>
                    <div>
                        <input type="password" placeholder="Password" className="loginInput" onChange={(event) => {setMyPassword(event.target.value)}} required/>
                    </div>
                    <button className="loginBtn"type="submit">LOGIN</button>
                </form>
        </section>
    ) 
}

export default Login; 