import { React, useState } from "react";
import { createNewTask } from "../api.js/api";
const AddTask = ({tasks, setTasks, me, token}) => {

    const [task, setTask] = useState("")
    const [dueDate, setDueDate] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newTask = await createNewTask(task, dueDate, me.id, token)
        delete newTask.creatorId
        setTasks([...tasks, newTask])
        setTask('')
        setDueDate('')
    }
    return (
        <div>
            <form id="task_form" onSubmit={handleSubmit}>
            <input type="text" value={task} required placeholder="New Task" onChange={(event) => setTask(event.target.value)}></input>
            <label>Due Date<input type="date" value={dueDate} required onChange={(event) => setDueDate(event.target.value)}></input></label>
            <button type="submit">Add Task</button>
            </form>
            </div>
    )
}
export default AddTask;