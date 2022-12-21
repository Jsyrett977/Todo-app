import { React, useState } from "react";

const AddTask = () => {
    const [task, setTask] = useState("")
    const [dueDate, setDueDate] = useState("")
    return (
        <div id="task_form">
            <form>
            <input type="text" value={task} required placeholder="New Task" onChange={(event) => setTask(event.target.value)}></input>
            </form>
            </div>
    )
}
export default AddTask;