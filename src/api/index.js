export const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api';


export async function fetchResgisterUser(url, username, password) {
    try {
        const response = await fetch(`${url}/users/register`, {
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

export async function fetchAllActivities(){
    try{
        const response = await fetch(`${BASE_URL}/activities`)
        const results = await response.json()
        const activities = await results
        return activities
    } catch (error) {
        console.error(error);
    }
}

export async function createActivity( url, userToken, name, description) {
    const actObj = {
        "name": name,
        "description": description
    } 
    try {
        const response = await fetch(`${url}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
            body: JSON.stringify(
                actObj  
            )
        })
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    } 
}

export async function fetchAllRoutines(){
    try{
        const response = await fetch(`${BASE_URL}/routines`)
        const results = await response.json()
        return results
    }catch(error){
        console.error(error)
    }
}

export async function fetchUsersRoutines(username){
      try{
          const headers = {
            headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIyNCwidXNlcm5hbWUiOiJ0b2J5IiwiaWF0IjoxNjMzNjUyMjA5LCJleHAiOjE2MzQyNTcwMDl9.kiVHm63giZdMTwcXWwwyxjwkVxEH3bS0izjlhvs9rmw`,
            },
        };
        const response = await fetch(`${BASE_URL}/users/albert/routines`, headers)
        const results = await response.json()
        console.log(results, "usersroutines")
        return results
    }catch(error){
        console.error(error)
    }
}