import {useState} from "react";
import SingleTask from './SingleTask'

const TaskList = ({tasks, setTasks}) => {
    return (
        <>
        <h2>Tasks</h2>
        <div id="tasks_page">
            <div id='all_tasks'>
                {tasks.map((task, index) => {
                    return (
                        <SingleTask key={index} task={task} setTasks={setTasks}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default TaskList;