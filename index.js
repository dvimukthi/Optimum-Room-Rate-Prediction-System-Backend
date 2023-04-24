const express = require("express");
const mysql = require("mysql");

var app = express();

const hostname = "localhost";
const port = 3001;

var server = app.listen(port, hostname, () => {
  console.log(`Server Started on : http://${hostname}:${port}/`);
});
