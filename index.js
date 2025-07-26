//
const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to parse URL-encoded bodies
app.use(express.json());

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/greeting", (request, response) => {
  response.send("<h1>Hello! what is your name?</h1>");
});

app.get("/greeting/one", (request, response) => {
  response.send("Good to see you!");
  console.log("test one");
});

app.get("/greeting/two/:name", (request, response) => {
  response.send(`Hello${request.params.name}, you smell like a wet dog!`);
  console.log("test two");
});

app.get("/greeting/three", (request, response) => {
  response.send("Be gone, before someone drops a house on you!");
  console.log("test three");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
