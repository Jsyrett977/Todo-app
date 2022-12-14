const BASE_URL = "";

export async function fetchTasks() {
    try{
        const response = await fetch(`${BASE_URL}/tasks`), {
            method: "GET",

        }
    } catch(error){
        throw(error)
    }
}