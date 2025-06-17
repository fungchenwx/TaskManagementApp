import { useState, useEffect } from "react"
import api from "../api"

function Home() {
    const [title, setTitle] = useState();
    const [tasks, setTasks] = useState();
    const [content, setContent] = useState();

    const getTasks = () => {
        api
            .get("/api/tasks/")
            .then((res) => res.data)
            .then((data) => { setTasks(data); console.log(data) })
            .catch((err) => alert(err))
    }

    const deleteTask = (id) => {
        api.delete(`/api/tasks/delete/${id}/`).then((res) => {
            if (res.status === 204) alert("Task deleted!")
            else alart("Failed to delete task")
        })
            .catch((error) => alert(error))
        getTasks()
    };

    const createTask = (e) => {
        e.preventDefault()
        api
            st("/api/notes/", { content, title }).then((res) => {
                if (res.status === 201) alert("Task created")
                else alart("Failed to create task")
            })
            .catch((error) => alert(error))
        getTasks();
    };


return <div>
    <div>
        <h2>Tasks</h2>
    </div>
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
    </form>
</div>
}

export default Home