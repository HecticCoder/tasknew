const express = require("express");
const app = express();
const port = 3000;

// Store the todo items in memory
let todos = [];

// Parse JSON request bodies
app.use(express.json());

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Create a new todo
app.post("/todos", (req, res) => {
  const { text } = req.body;

  // Create a new todo object
  const newTodo = {
    text,
    checked: false,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// Update the status of a todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { checked } = req.body;

  // Find the todo with the given ID
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }

  todo.checked = checked;

  res.json(todo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  // Find the index of the todo with the given ID
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }

  todos.splice(index, 1);

  res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
