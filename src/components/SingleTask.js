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
            const newTasks = tasks.filter(task => task.id !== deletedTask.id)
            setTasks(newTasks)
        }
    return (
        <div className='single_task'>
            <p>Task: {task.task}</p>
            <p>Due: {dateString}</p>
            {task.complete ?
                <button className="complete_button" onClick={handleComplete}>Not Complete</button>
                : 
                <button className="complete_button" onClick={handleComplete}>Complete</button>}
            <div className="delete_container"><button id="delete_button" onClick={handleDelete}><i className="fas fa-trash"></i></button></div>
        </div>
    )
}

export default SingleTask;