export const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api';


export async function fetchResgisterUser(url, username, password) {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    "username": username,
                    "password": password
            })
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}

export async function fetchLoginUser(url, username, password) {
    try {
        const response = await fetch(`${url}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
               "username": username,
               "password": password
        })
    })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
      }   
}