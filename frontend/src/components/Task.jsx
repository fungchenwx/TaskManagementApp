import React, { useState } from "react";
import "../styles/Task.css"

const STATUSES = ["green", "orange", "red"]
const STATUSES_TEXT = [""]

function Task({ task, onDelete, onStatusChange }) {
    const formattedDate = new Date(task.created_at).toLocaleDateString("en-US")

    return (
        <div className="task">
            <div className="task-info">
                <h3 className="task-title">{task.title}</h3>
                <p className="task-content">{task.content}</p>
                <p className="task-date">{formattedDate}</p>
            </div>
            <button className="delete-button" onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </div>
    )
}

export default Task