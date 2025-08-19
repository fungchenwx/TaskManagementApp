import { useState, useEffect } from "react"
import Task from "../components/Task"
import api from "../api"
import "../styles/Home.css"
import "../styles/Task.css"
import "../styles/Form.css"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"


function Home() {
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]);
    const [content, setContent] = useState("");

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN)
        localStorage.removeItem(REFRESH_TOKEN)
        navigate("/login")
    }


    const getTasks = async () => {
        try {
            const res = await api.get("/api/tasks/");
            const data = res.data;
            setTasks(data);
            console.log(data);
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => { getTasks(); }, []);

    const deleteTask = async (id) => {
        try {
            const res = await api.delete(`/api/tasks/delete/${id}/`);
            if (res.status === 204) {
                alert("Task deleted!");
            } else {
                alert("Failed to delete task");
            }
        } catch (error) {
            alert(error);
        } finally {
            getTasks();
        }
    };

    const createTask = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/api/tasks/", { title, content });
            if (res.status === 201) {
                alert("Task created");
                setTitle("");
                setContent("");
                await getTasks();
            } else {
                alert("Failed to create task");
            }
        } catch (error) {
            alert(error);
        }
    };


    return (
        <div className="home-container">
            <div className="home-header">
                <h1>My Tasks</h1>
                <button className="logout-button" onClick={handleLogout}>
                Logout
                </button>
            </div>
            <div className="tasks-section">
                <h2>Tasks</h2>
                {tasks.length === 0 && <p className="no-tasks">No tasks yet.</p>}
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onStatusChange={(id, status) => {
                            api.patch(`/api/tasks/update/${id}/`, { status })
                                .then(() => getTasks())
                                .catch(err => alert(err));
                        
                        }}
                    />
                ))}
            </div>
            <div className="form-container">
                <h2>Create a Task</h2>
                <form onSubmit={createTask}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-input"
                    />
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="form-input"
                    />
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>            
    );
}

export default Home