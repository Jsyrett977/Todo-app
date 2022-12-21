import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { AddTask, TasksList } from "./components/index";
import { fetchTasks } from "./api.js/api";
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
        <TasksList tasks={tasks} setTasks={setTasks}/>
        <AddTask tasks={tasks} setTasks={setTasks} />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)