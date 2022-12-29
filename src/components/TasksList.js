import SingleTask from './SingleTask'
import { useEffect, useState } from 'react'
const TaskList = ({tasks, setTasks, token, me}) => {
    const [activeTasks, setActiveTasks] = useState([])
    useEffect(() => {
        const activeTasksArray = tasks.filter(task => !task.complete)
        setActiveTasks(activeTasksArray)
        console.log('hi')
    }, [tasks])
    return (
        <>
        <h2>{me.firstName}'s Tasks</h2>
        <div id="tasks_page">
            <div id='all_tasks'>
                {activeTasks.map((task, index) => {
                    return (
                    <SingleTask key={index} tasks={tasks} setTasks={setTasks} task={task} setTasks={setTasks} token={token}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default TaskList;