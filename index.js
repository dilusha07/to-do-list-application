const express = require("express");
const mongoose = require("mongoose");
const { json } = require("express");

const app = express();

//const Task = require("/models/tasks");

//Connect mongoDB database
const databaseURL =
  "mongodb+srv://dilusha:dilusha@cluster0.ewvoyv4.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

let tasks = [
  {
    id: 1,
    title: "Task1",
    status: "pending",
    dateAdded: "2022/10/12",
    dateUpdated: "2022/10/20",
  },

  {
    id: 2,
    title: "Task2",
    status: "pending",
    dateAdded: "2022/10/12",
    dateUpdated: "2022/10/20",
  },
  {
    id: 3,
    title: "Task3",
    status: "pending",
    dateAdded: "2022/10/12",
    dateUpdated: "2022/10/20",
  },
  {
    id: 4,
    title: "Task4",
    status: "pending",
    dateAdded: "2022/10/12",
    dateUpdated: "2022/10/20",
  },
];

//Get All tasks
app.get(`/`, (req, res) => {
  return res.json(tasks);
});

//Get task by id
app.get("/task/:id", async (req, res) => {
  const id = req.params.id;
  //const task = tasks.find((task) => task.id === id);
  //console.log(task);
  return res.json(id);
});

//Edit task
app.put("/task/:id", async (req, res) => {
  const id = req.params.id;
  const { title, status } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === id);
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title,
    status,
  };

  res.send(tasks[taskIndex]);
});

//Delete task
app.delete("/task/:id", async (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter((task) => task.id !== id);
  res.send(id);
  console.log(tasks);
  //return res.send(id);
});
