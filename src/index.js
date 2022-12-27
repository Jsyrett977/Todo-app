import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { AddTask, TasksList, Register, NavBar, Login } from "./components/index";
import { fetchTasks } from "./api.js/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
    const [tasks, setTasks ] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        const localToken = localStorage.getItem('token')
        localToken ? setToken(localToken) : null
    }, [])
    useEffect(() => {
        fetchTasks().then((result) => {
            setTasks(result.tasks)
            console.log(result.tasks[0].due_date)
        })
    }, []);

    return (
        <div>
            <BrowserRouter>
            <NavBar token={token} setToken={setToken}/>
            <Routes>
            <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>
            <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} setToken={setToken}/>}/>
            <Route path="/" element={<TasksList tasks={tasks} setTasks={setTasks}/>}/>
            </Routes>
            <AddTask tasks={tasks} setTasks={setTasks}/>
            
            </BrowserRouter>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)