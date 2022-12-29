import SingleTask from './SingleTask'

const TaskList = ({tasks, setTasks, token, me}) => {
    return (
        <>
        <h2>{me.firstName}'s Tasks</h2>
        <div id="tasks_page">
            <div id='all_tasks'>
                {tasks.map((task, index) => {
                    if(task.complete){
                        return
                    }return (
                        <SingleTask key={index} task={task} setTasks={setTasks} token={token}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}
export default TaskList;