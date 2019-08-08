const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/cats", (req, res) => {
  res.send("<h1>Meow</h1>");
});

app.get("/dogs", (req, res) => {
  res.send("<h1>Woof</h1>");
});

app.get("/cats_and_dogs", (req, res) => {
  res.send("<h1>Living Together</h1>");
});

app.get("/greet/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.get("/hello1", function(req, res) {
  const name = req.query.name || "world";
  res.send(`Hello ${name}!`);
});

app.get("/year", function(req, res) {
  const year = req.query.year || "";
  res.send(`You were born in ${year}!`);
});

app.listen(3000, () => {
  console.log("Express listening on port 3000...");
});
