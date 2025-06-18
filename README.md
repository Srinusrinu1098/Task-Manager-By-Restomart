# 📝 Task Manager App

A full-stack Task Manager web application built with:

- **Frontend:** Next.js + Tailwind CSS
- **Backend:** Node.js + Express.js + PostgreSQL
- **ORM:** TypeORM
- **Deployment Ready:** GitHub integrated, supports Railway/Vercel/Render

---

## 📁 Project Structure

Task-Manager/
├── app/
│   ├── _components/
│   │   └── NavBar.jsx          # Navigation bar component used across pages
│   ├── home/                   # Displays all tasks
│   │   └── page.jsx
│   ├── edit/
│   │   └── [id]/               # Edit page with dynamic route for task id
│   │       └── page.jsx
│   ├── add/                    # Create new task page
│   │   └── page.jsx
│   ├── delete/                 # Optional: delete confirmation or UI
│   │   └── page.jsx
│   └── layout.jsx             # Common layout (e.g., NavBar)
├── public/                    # Static files like favicon, images
├── README.md
├── .gitignore
├── package.json
├── tailwind.config.js
└── next.config.js


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Srinusrinu1098/Task-Manager-By-Restomart.git
cd Task-Manager-By-Restomart

## 🚀 Getting Started

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add:

```env
DATABASE_URL=postgresql://postgres:LgCrCLHBefpMxfHVKgcGwQZanFLZFQQO@switchyard.proxy.rlwy.net:25125/railway

```

Start the backend server:

```bash
node index.js
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit the frontend app in your browser:

```
http://localhost:3000
```

### Landing page 
![Screenshot 2025-06-18 152432](https://github.com/user-attachments/assets/6b752e12-6cfa-4ebf-9b01-f31b1adfeb98)

### Create Task 
![Task create](https://github.com/user-attachments/assets/54b73aba-835d-47e7-beed-de1676b7a087)

### All Tasks with Filtering 
![Screenshot 2025-06-18 152647](https://github.com/user-attachments/assets/18a9221b-8362-48fc-9e3a-6d9108d48200)

### Task Edit 
![Task Editing](https://github.com/user-attachments/assets/4387749f-f0e7-4c91-a316-5ee72968959e)

### Task Deleteing
![Task Deleting](https://github.com/user-attachments/assets/cde5f4c9-c970-43cf-bd4f-350f4464ab87)

### Not Found 
![Not found ](https://github.com/user-attachments/assets/e5a06ac0-9cbf-4910-a42e-331481744052)








