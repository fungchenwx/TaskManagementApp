# TaskManagementApp

A full-stack **Task Management Application** built with **React** (frontend) and **Django REST Framework** (backend). Users can register, log in, create tasks, update task statuses, and delete tasks.  

---

## Showcase

### Login Page
<img width="1440" height="753" alt="Login Page" src="https://github.com/user-attachments/assets/c96e4319-f4c5-41a1-b8ab-898c3a3a87b0" />

### Register Page
<img width="1440" height="753" alt="Register Page" src="https://github.com/user-attachments/assets/06737136-474f-4018-b57f-2241594b8371" />

### Home Page
<img width="1440" height="755" alt="Home Page" src="https://github.com/user-attachments/assets/2a76fb01-9096-423a-bb1d-5cde06b07101" />

---

## Features

- User **Registration & Login** with JWT authentication  
- **Task CRUD operations** (Create, Read, Update, Delete)  
- **Task status toggle** (pending ↔ completed)  
- **Task count summary** (pending, completed, total)  
- Responsive UI with React  

---

## Tech Stack

- **Frontend:** React, Axios, React Router, CSS  
- **Backend:** Django 5, Django REST Framework, Simple JWT  
- **Database:** SQLite, can be swapped with PostgreSQL  
- **Hosting:** AWS (backend) + Amplify (frontend)  

---

## Project Structure

TaskManagementApp/
├─ backend/
│  ├─ api/
│  │  ├─ migrations/
│  │  ├─ models.py
│  │  ├─ serializers.py
│  │  └─ views.py
│  ├─ manage.py
│  └─ backend/
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ styles/
│  │  └─ App.jsx
│  └─ package.json
└─ README.md

---

## API Endpoints

| Method | Endpoint                  | Description                | Auth |
| ------ | ------------------------- | -------------------------- | ---- |
| POST   | `/api/user/register/`     | Register new user          | No   |
| POST   | `/api/token/`             | Get JWT tokens             | No   |
| POST   | `/api/token/refresh/`     | Refresh JWT token          | No   |
| GET    | `/api/tasks/`             | List user tasks            | Yes  |
| POST   | `/api/tasks/`             | Create new task            | Yes  |
| PATCH  | `/api/tasks/<id>/`        | Update task status/content | Yes  |
| DELETE | `/api/tasks/delete/<id>/` | Delete task                | Yes  |

--- 

## License

This project is licensed under the MIT License.
