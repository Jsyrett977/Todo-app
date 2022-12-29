import SingleTask from './SingleTask'
import { useState, useEffect } from 'react'

const CompletedTasks = ({tasks, setTasks, token, me}) => {
    const [completedTasks, setCompletedTasks] = useState([])
    useEffect(() => {
        const completedTasksArray = tasks.filter(task => task.complete)
        setCompletedTasks(completedTasksArray)
    }, [tasks])
    return (
        <>
        <h2>{me.firstName}'s Completed Tasks</h2>
        <div className="tasks_page">
            <div className="all_tasks">
                {completedTasks.map((task, index) => {
                        return <SingleTask key={index} tasks={tasks} task={task} setTasks={setTasks} token={token}/>
                })}
            </div>
        </div>
        </>
    )
}
export default CompletedTasks;