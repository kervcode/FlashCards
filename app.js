const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("I am going over this for a 3rd time!");
});

app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "Who is buried in Grant's tomb?"
  });

  // res.locals.prompt = "Who is buried in Grant's Thumb?";
  // res.render("card");
});

app.get("/hello", (req, res) => {
  res.render("hello");
});

app.post("/hello", (req, res) => {
  // console.dir(req.body);
  // res.render("hello");
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
