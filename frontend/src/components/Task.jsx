import React, { useState } from "react";
import "../styles/Task.css"

const STATUSES = ["green", "orange", "red"]
const STATUSES_TEXT = [""]

function Task({ task, onDelete, onStatusChange }) {

    const initial = STATUSES.indexOf(task.status) >= 0 ? STATUSES.indexOf(task.status) : 0;

    const [statusIndex, setStatusIndex] = useState(initial);

    const handleStatusClick = () => {
        const next = (statusIndex + 1) % STATUSES.length;
        setStatusIndex(next);

        if (onStatusChange) {
            onStatusChange(task.id, STATUSES[next])
        }
    }

    const formattedDate = new Date(task.created_at).toLocaleDateString("en-US")

    return (
        <div className="task-container">
            <div>
                <span
                    className={`status-indicator status-${STATUSES[statusIndex]}`}
                    onClick={handleStatusClick}
                    title={`Current status: ${STATUSES[statusIndex]}`}
                />
            </div> 
            <div className="task-container">
                <p className="task-title">{task.title}</p>
                <p className="task-content">{task.content}</p>
                <p className="task-date">{formattedDate}</p>
                <button className="delete-button" onClick={() => onDelete(task.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Task