const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  const data = await Todo.find({});
  res.status(200).json({ todos: data });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, priority, completed } = req.body;
  const todo = { name, priority, completed };
  const newTodo = new Todo(todo);
  await newTodo.save();
  res.status(200).json({ todo: newTodo });
});

module.exports = router;
