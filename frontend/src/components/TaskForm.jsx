import { useState } from "react";
import "../styles/TaskForm.css"


function TaskForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);
        setShowSuccess(false);
        try {
            await onSubmit({ title, content });
            setTitle("");
            setContent("");
            setShowSuccess(true);
        } catch (err) {
            console.error("Error creating task:", err);
        } finally {
            setIsSubmitting(false);
        }
    };
    const isFormValid = title.trim() !== "" && content.trim() !== "";

    return (
        <form onSubmit={handleSubmit} className="taskform-form">
            <div className="taskform-header">Create a Task</div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                className="taskform-input"
                disabled={isSubmitting}
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                className="taskform-textarea"
                disabled={isSubmitting}
            />
            <button
                type="submit"
                className="taskform-button"
                disabled={!isFormValid || isSubmitting}
            >
                {isSubmitting ? "Creating..." : "Create Task"}
            </button>

            {showSuccess && <p className="success-message">Task created successfully!</p>}
        </form>
    );
}

export default TaskForm