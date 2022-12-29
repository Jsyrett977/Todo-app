import { updateTask, deleteTask } from "../api.js/api";
const SingleTask = ({tasks, setTasks, task, token}) => {
    const dateString = new Date(task.due_date).toLocaleDateString(
        'en-US',{weekday: "long", month: "long", day: "numeric"})
        const handleComplete = async () => {
            const newTask = await updateTask(task.id, task.complete, token) 
            delete newTask.creatorId;
            const newTasks = tasks.map(task => task.id === newTask.id ? newTask : task)
            setTasks(newTasks)
        }
        const handleDelete = async () => {
            const deletedTask = await deleteTask(task.id, token)
            console.log(tasks)
            console.log(deletedTask)
            const newTasks = tasks.filter(task => task.id !== deletedTask.id)
            console.log(newTasks)
            setTasks(newTasks)
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