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
                <h3>Create a new Task</h3>
            <input className='text_input' type="text" value={task} required placeholder="New Task" onChange={(event) => setTask(event.target.value)}></input>
            <div>
            <label>Due By<input id='date' type="date" value={dueDate} required onChange={(event) => setDueDate(event.target.value)}></input></label>
            <button id="add_button" type="submit">Add Task</button>
            </div>
            </form>
            </div>
    )
}
export default AddTask;