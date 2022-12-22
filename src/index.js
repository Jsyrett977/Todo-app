import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { AddTask, TasksList, Register } from "./components/index";
import { fetchTasks } from "./api.js/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
const App = () => {

    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        fetchTasks().then((result) => {
            setTasks(result.tasks)
            console.log(result.tasks[0].due_date)
        })
    }, []);

    return (
        <div>
            <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path="/register" element={<Register />}/>
            </Routes>
            <TasksList tasks={tasks} setTasks={setTasks}/>
            <AddTask tasks={tasks} setTasks={setTasks}/>
            
            </BrowserRouter>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)