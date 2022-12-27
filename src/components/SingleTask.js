import { updateTask } from "../api.js/api";
import { useState } from "react";
const SingleTask = ({task, token}) => {
    const dateString = new Date(task.due_date).toLocaleDateString(
        'en-US',{weekday: "long", month: "long", day: "numeric"})
        const [complete, setComplete] = useState(false)
        const handleComplete = () => {
            updateTask(task.id, complete, token)
            setComplete(!complete)
        }
    return (
        <div id='single_task'>
            <p>Task: {task.task}</p>
            <p>Due: {dateString}</p>
            <button id="complete_button" onClick={handleComplete}>Complete</button>
            <button id="delete_button">Delete</button>
        </div>
    )
}

export default SingleTask;