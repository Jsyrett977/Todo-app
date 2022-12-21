

const SingleTask = ({task}) => {
    const dateString = new Date(task.due_date).toLocaleDateString(
        'en-US',{weekday: "long", month: "long", day: "numeric"})
    return (
        <div id='single_task'>
            <p>Task: {task.task}</p>
            <p>Due: {dateString}</p>
        </div>
    )
}

export default SingleTask;