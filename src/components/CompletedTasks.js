import SingleTask from './SingleTask'

const CompletedTasks = ({tasks, setTasks, token, me}) => {
    return (
        <>
        <h2>{me.firstName}'s Completed Tasks</h2>
        <div className="tasks_page">
            <div className="all_tasks">
                {tasks.map((task, index) => {
                    if(task.complete){
                        return <SingleTask key={index} task={task} setTasks={setTasks} token={token}/>
                    }
                })}
            </div>
        </div>
        </>
    )
}
export default CompletedTasks;