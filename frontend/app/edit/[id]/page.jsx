"use client";
import React, { useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const EditTask = () => {
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(process.env.NEXT_PUBLIC_BASE_URL + "tasks/" + id, task, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);

      alert("✅ Task Edited successfully!");
      setTask({
        title: "",
        description: "",
        status: "todo",
        dueDate: "2025-06-30",
      });
    } catch (error) {
      console.error("❌ Failed to create task:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50 pt-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">➕ Edit Task</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black rounded-lg text-black"
            placeholder="Enter task title"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black rounded-lg text-black"
            placeholder="Enter task description"
            rows={4}
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-black rounded-lg text-black"
          >
            <option value="todo">📝 Todo</option>
            <option value="in_progress">🚧 In Progress</option>
            <option value="done">✅ Done</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-2 border border-black rounded-lg text-black"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
          } text-white font-semibold py-2 px-4 rounded-lg transition`}
        >
          {loading ? (
            <span className="animate-bounce">Task submitting...</span>
          ) : (
            "Edit Task"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditTask;
