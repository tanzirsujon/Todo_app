import express from "express";
import todo from "../models/todoSchema.js";

import todoHandler from "../controllers/todo.js";
const todoRoutes = express.Router();

todoRoutes.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");

    const userName = req.user.username;

    const allTodo = await todo.find({ createdBy: req.user._id });

    res.render("todo", { user: userName, todos: allTodo });
});

todoRoutes.post("/", todoHandler);

export default todoRoutes;
