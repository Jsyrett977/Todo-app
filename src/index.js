import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { AddTask, TasksList } from "./components/index";
import { fetchTasks } from "./api.js/api";
const App = () => {

    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        fetchTasks().then((result) => {
            setTasks(result.tasks)
        })
    }, []);

    return (
        <div>
            
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TasksList tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)