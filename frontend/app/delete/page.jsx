"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function DeleteTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getAllTheTaskData();
    setLoading(true);
  }, []);

  const getAllTheTaskData = async () => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "tasks"
    );
    const result = response.data;
    setTasks(result);
    console.log(result);
    setLoading(false);
  };

  const DeleteTask = async (id) => {
    setDeletingId(id);
    try {
      await axios.delete(process.env.NEXT_PUBLIC_BASE_URL + "tasks/" + id);
      alert("✅ Task Deleted Succesfully");
      getAllTheTaskData();
    } catch (e) {
      console.error("❌ Failed Deleting Task :", e.message);
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
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
          <p className="text-gray-500">No tasks found </p>
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
                  <button
                    type="submit"
                    disabled={deletingId === task.id}
                    onClick={() => DeleteTask(task.id)}
                    className={` text-white text-sm font-semibold py-1 px-3 rounded-md shadow ${
                      deletingId === task.id
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-red-600 cursor-pointer"
                    }`}
                  >
                    {deletingId === task.id ? (
                      <span className="animate-bounce">Task Deleting...</span>
                    ) : (
                      "🗑️ Delete"
                    )}
                  </button>
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

export default DeleteTasks;
