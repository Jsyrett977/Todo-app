import { RowDescriptionMessage } from "pg-protocol/dist/messages";

const BASE_URL = "http://localhost:3001/api";

export async function fetchTasks() {
    try{
        const response = await fetch(`${BASE_URL}/tasks`, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        })
        const data = await response.json();
        return data
    } catch(error){
        throw(error)
    }
}
export async function registerUser(username, password, firstName, lastName) {
    try{
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username,
                    password,
                    firstName,
                    lastName
                
            }) 
        })
        const result = await response.json();
        console.log(result)
        return result;
    }catch(error){
        throw error;
    }
}
export async function loginUser(username, password) {
    try{
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username,
                    password,
            }) 
        })
        const result = await response.json();
        console.log(result)
        return result;
    }catch(error){
        throw error;
    }
}