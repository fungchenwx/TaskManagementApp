import { useState, useEffect } from "react"
import Task from "../components/Task"
import api from "../api"
import "../styles/Home.css"

function Home() {
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]);
    const [content, setContent] = useState("");


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
                await getTasks();
            } else {
                alert("Failed to create task");
            }
        } catch (error) {
            alert(error);
        }
    };


    return (
        <div>
            <h2>Tasks</h2>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={deleteTask}
                />
            ))}
            <h2>Create a Task</h2>
            <form onSubmit={createTask}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home