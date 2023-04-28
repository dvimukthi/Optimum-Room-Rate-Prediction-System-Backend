const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const hostname = "localhost";
const port = 3001;

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "app_user",
  password: "12345",
  database: "orrp_ai",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to Database!");
});

// app.get("/", function (req, res) {
//   res.send(JSON.stringify({ status: "OK" }));
// });

app.post("/signup", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  connection.query(
    "INSERT INTO user (name, password) VALUES(?, ?)",
    [name, password],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Enter Correct Details" });
      }
    }
  );
});

var server = app.listen(port, hostname, () => {
  console.log(`Server Started on : http://${hostname}:${port}/`);
});
