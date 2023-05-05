const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const hostname = "localhost";
const port = 3002;

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

app.post("/signin", (req, res) => {
  console.log(req.body);
  const name = req.body.SignInName;
  const password = req.body.SignInPassword;

  connection.query(
    "SELECT * FROM `user` WHERE `name` = ? AND `password`= ?",
    [name, password],
    (err, result) => {
      console.log(err);
      if (err) {
        req.setEncoding({ err: err });
      } else {
        if (result.length > 0) {
          res.send(200);
        } else {
          res.send({ message: "Wrong Username or Password" });
        }
      }
    }
  );
});

var server = app.listen(port, hostname, () => {
  console.log(`Server Started on : http://${hostname}:${port}/`);
});
