import express from "express";
import { AppDataSource } from "./data-source.js";
import "dotenv/config";
import { parse } from "pg-connection-string";
import cors from "cors";

const dbConfig = parse(process.env.DATABASE_URL);

const app = express();
app.use(express.json());
app.use(cors());

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Connected to DB");
    const taskRepo = AppDataSource.getRepository("Task");

    //  Create
    app.post("/tasks", async (req, res) => {
      try {
        const { title, description, status, dueDate } = req.body;
        const task = taskRepo.create({ title, description, status, dueDate });
        const savedTask = await taskRepo.save(task);
        res.status(201).json(savedTask);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    });

    //  Read all
    app.get("/tasks", async (req, res) => {
      const tasks = await taskRepo.find();
      res.json(tasks);
    });

    //  Read one
    app.get("/tasks/:id", async (req, res) => {
      const task = await taskRepo.findOneBy({ id: req.params.id });
      if (!task) return res.status(404).json({ error: "Task not found" });
      res.json(task);
    });

    //  Update
    app.put("/tasks/:id", async (req, res) => {
      const task = await taskRepo.findOneBy({ id: req.params.id });
      if (!task) return res.status(404).json({ error: "Task not found" });

      const { title, description, status, dueDate } = req.body;
      task.title = title ?? task.title;
      task.description = description ?? task.description;
      task.status = status ?? task.status;
      task.dueDate = dueDate ?? task.dueDate;

      const updatedTask = await taskRepo.save(task);
      res.json(updatedTask);
    });

    //  Delete
    app.delete("/tasks/:id", async (req, res) => {
      const task = await taskRepo.findOneBy({ id: req.params.id });
      if (!task) return res.status(404).json({ error: "Task not found" });

      await taskRepo.remove(task);
      res.json({ message: "Task deleted successfully" });
    });
    const PORT = parseInt(dbConfig.port);

    app.listen(PORT, () =>
      console.log(`🚀 Server on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ DB Connection Failed", err);
  });
