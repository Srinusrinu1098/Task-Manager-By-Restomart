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

