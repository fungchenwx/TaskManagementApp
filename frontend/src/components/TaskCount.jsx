import "../styles/TaskCount.css";

function TaskCount({ tasks }) {
    const total = tasks.length;
    const pending = tasks.filter(task => task.status === "pending").length;
    const completed = tasks.filter(task => task.status === "completed").length;

    return (
        <div className="task-count-container">
            <div className="task-pending">
                <span className="label-pending">{pending}</span> Pending
            </div>
            <div className="task-completed">
                <span className="label-completed">{completed}</span> Complete
            </div>
            <div className="task-total">
                <span className="label-total">{total}</span> Total
            </div>
        </div>
    );
}

export default TaskCount;
