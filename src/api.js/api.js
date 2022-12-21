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
