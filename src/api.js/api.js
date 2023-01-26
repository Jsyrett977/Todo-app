
const {BASE_URL = "http://localhost:3001/api"} = process.env;
export async function fetchUserTasks(id, token){
    try{
        const response = await fetch(`${BASE_URL}/tasks/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json();
        return result
    }catch(error){
        throw error;
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
        return result;
    }catch(error){
        throw error;
    }
}
export async function fetchMe(token){
    try{
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await response.json();
        return result;
    }catch(error){
        throw error
    }
}
export async function createNewTask(task, due_date, creatorId, token){
    const response = await fetch(`${BASE_URL}/tasks`,{
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            task,
            due_date,
            creatorId
        })
    })
    const result = await response.json()
    return result;
}
export async function updateTask(taskId, complete, token){
    if(complete){
        complete = false
    }else {
        complete = true
    }
    try{
        const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                complete,
                completedOn: new Date(),
            })
        })
        const result = await response.json();
        return result;
    }catch(error){
        throw error
    }
}
export async function deleteTask(taskId, token){
    try{
        const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        })
        const result = await response.json();
        return result;
    } catch(error){
        throw error;
    }
}