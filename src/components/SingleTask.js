import { updateTask, deleteTask } from "../api.js/api";
const SingleTask = ({task, token}) => {
    const dateString = new Date(task.due_date).toLocaleDateString(
        'en-US',{weekday: "long", month: "long", day: "numeric"})
        const handleComplete = () => {
            updateTask(task.id, task.complete, token)
        }
        const handleDelete = () => {
            deleteTask(task.id, token)
        }
    return (
        <div id='single_task'>
            <p>Task: {task.task}</p>
            <p>Due: {dateString}</p>
            {task.complete ?
                <button className="complete_button" onClick={handleComplete}>Not Complete</button>
                : 
                <button className="complete_button" onClick={handleComplete}>Complete</button>}
            <button id="delete_button" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default SingleTask;