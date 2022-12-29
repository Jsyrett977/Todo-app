import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { AddTask, TasksList, Register, NavBar, Login, CompletedTasks, Welcome } from "./components/index";
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
            if(Object.keys(me).length){
            if(tasks.length === me.tasks.length){
                return
            }}
            setMe(result);
        })
    }
    }, [token, tasks])
    useEffect(() => {
    if(Object.keys(me).length > 0){
        fetchUserTasks(me.id, token).then((result) => {
           setTasks(result)
        })}
    }, [me]);

    return (
        <div id="app">
            <BrowserRouter>
            <NavBar token={token} setToken={setToken} setMe={setMe}/>
            <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}/>
            <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} setToken={setToken}/>}/>
            <Route path="/tasks" element={<TasksList tasks={tasks} setTasks={setTasks} token={token} me={me}/>}/>
            <Route path="/Completed" element={<CompletedTasks tasks={tasks} setTasks={setTasks} token={token} me={me}/>}/>
            </Routes>
            {token ? <AddTask tasks={tasks} setTasks={setTasks} me={me} token={token}/> : null}
            
            </BrowserRouter>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)