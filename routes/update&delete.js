import express from "express";
import todo from "../models/todoSchema.js";

const todoUdate_DelteRoutes = express.Router();

todoUdate_DelteRoutes.put("/:id", async (req, res) => {
  try {
    let slug = req.params.id;
    const { title, desc, dueDate } = req.body;

    await todo.findByIdAndUpdate(slug, { title, desc, dueDate });
    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo", error });
  }
});
todoUdate_DelteRoutes.delete("/:id", async (req, res) => {
  try {
    await todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo", error });
  }
});

export default todoUdate_DelteRoutes;
