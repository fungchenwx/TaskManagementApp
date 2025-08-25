import React, { useState } from "react";
import "../styles/Task.css"


function Task({ task, onDelete, onStatusChange }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const formattedDate = new Date(task.created_at).toLocaleDateString("en-US")

    const handleDelete = async () => {
        if (isDeleting || isUpdating) return;
        setIsDeleting(true);
        try {
            await onDelete(task.id);
        } catch (err) {
            console.error("Error deleting task:", err);
            setIsDeleting(false);
        }
    };

    const handleStatusToggle = async () => {
        if (isUpdating || isDeleting) return;
        const newStatus = task.status === "completed" ? "pending" : "completed";
        setIsUpdating(true);
        try {
            await onStatusChange(task.id, newStatus);
        } catch (err) {
            console.error("Error updating status:", err);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className={`task ${task.status}`}>
            <div className="task-info">
                <h3 className="task-title">{task.title}</h3>
                <p className="task-content">{task.content}</p>
                <p className="task-date">{formattedDate}</p>
            </div>
            <div className="task-actions">
                <button
                    className={`status-toggle ${task.status}`}
                    onClick={handleStatusToggle}
                    disabled={isUpdating || isDeleting}
                    title={task.status === "completed" ? "Mark as pending" : "Mark as completed"}
                >
                    {isUpdating ? (
                        <div className="mini-spinner"></div>
                    ) : task.status === "completed" ? "✓" : "○"}
                </button>

                <button
                    className="delete-button"
                    onClick={handleDelete}
                    disabled={isDeleting || isUpdating}
                    title="Delete task"
                >
                    {isDeleting ? <div className="mini-spinner"></div> : "×"}
                </button>
            </div>
        </div>
    );
}


export default Task