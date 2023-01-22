import { updateTask, deleteTask } from "../api.js/api";
const SingleTask = ({tasks, setTasks, task, token}) => {
        const createDateString = (date) => {
            return new Date(date).toLocaleDateString(
                'en-US',{weekday: "long", month: "long", day: "numeric"})
        }
        const dueDateString = createDateString(task.due_date)
        const completedOnDate = createDateString(task.completedOn)
        const handleComplete = async () => {
            const newTask = await updateTask(task.id, task.complete, token) 
            delete newTask.creatorId;
            const newTasks = tasks.map(task => task.id === newTask.id ? newTask : task)
            setTasks(newTasks)
        }
        const handleDelete = async () => {
            if(confirm("Are you sure you want to delete this task?")){
            const deletedTask = await deleteTask(task.id, token)
            const newTasks = tasks.filter(task => task.id !== deletedTask.id)
            setTasks(newTasks)
            }
        }
    return (
        <div id={task.complete ? (new Date(task.completedOn).getTime() >= (new Date(task.due_date).getTime() + 85399999)) ? "red" : "green" : null} className='single_task'>
            <p>Task: {task.task}</p>
            <p>Due: {dueDateString}</p>
            {task.complete ? <p>Completed on: {completedOnDate}</p>: null}
            {task.complete ?
                <button id='not-complete'className="complete_button" onClick={handleComplete}>Not Complete</button>
                : 
                <button className="complete_button" onClick={handleComplete}>Complete</button>}
            <div className="delete_container"><button id="delete_button" onClick={handleDelete}><i className="fas fa-trash"></i></button></div>
        </div>
    )
}

export default SingleTask;