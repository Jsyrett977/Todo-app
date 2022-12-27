import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { AddTask, TasksList, Register, NavBar, Login } from "./components/index";
import { fetchMe, fetchUserTasks } from "./api.js/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
    const [tasks, setTasks ] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [me, setMe] = useState({})

    useEffect(() => {
        const localToken = localStorage.getItem('token')
        localToken ? setToken(localToken) : null
    }, [])
    useEffect(() => {
        if(token){
        fetchMe(token).then((result) => {
            setMe(result);
        })
    }
    }, [token])
    useEffect(() => {
    if(Object.keys(me).length > 0){
        fetchUserTasks(me.id, token).then((result) => {
           setTasks(result)
        })}
    }, [me]);

    return (
        <div>
            <BrowserRouter>
            <NavBar token={token} setToken={setToken}/>
            <Routes>
            <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>
            <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} setToken={setToken}/>}/>
            <Route path="/" element={<TasksList tasks={tasks} setTasks={setTasks} token={token} me={me}/>}/>
            </Routes>
            <AddTask tasks={tasks} setTasks={setTasks} me={me} token={token}/>
            
            </BrowserRouter>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)