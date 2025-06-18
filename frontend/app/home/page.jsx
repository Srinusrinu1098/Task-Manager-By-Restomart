"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function AllTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getAllTheTaskData();
    setLoading(true);
  }, []);

  const getAllTheTaskData = async () => {
    const response = await axios.get("http://localhost:25125/tasks");
    const result = response.data;
    setTasks(result);
    setLoading(false);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // filter tasks by status
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-5">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">📝 All Tasks</h2>
          <select
            className="border border-gray-400 text-sm rounded-md px-2 py-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="todo">📝 Todo</option>
            <option value="in_progress">🚧 In Progress</option>
            <option value="done">✅ Done</option>
          </select>
        </div>

        {loading ? (
          <h1 className="animate-bounce">Loading...</h1>
        ) : filteredTasks.length === 0 ? (
          <p className="text-gray-500">No tasks found</p>
        ) : (
          <ul className="space-y-6">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className="p-5 border rounded-md bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-black">
                    {task.title}
                  </h3>
                  <Link href={`/edit/${task.id}`}>
                    <button className="bg-yellow-500 cursor-pointer text-white text-sm font-semibold py-1 px-3 rounded-md shadow">
                      ✏️ Edit
                    </button>
                  </Link>
                </div>

                <p className="text-gray-700 mb-2">{task.description}</p>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>📅 Due Date:</strong> {formatDate(task.dueDate)}
                  </p>
                  <p>
                    <strong>🕒 Created:</strong> {formatDate(task.createdAt)}
                  </p>
                  <p>
                    <strong>🔄 Updated:</strong> {formatDate(task.updatedAt)}
                  </p>
                  <p>
                    <strong>🚦 Status:</strong>{" "}
                    {task.status === "todo"
                      ? "📝 Todo"
                      : task.status === "in_progress"
                      ? "🚧 In Progress"
                      : "✅ Done"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AllTasks;
