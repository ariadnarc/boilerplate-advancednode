"use strict";

const express = require("express");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const pug = require('pug');
const app = express();

fccTesting(app); //For FCC testing purposes
const cors = require('cors');
app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './views/pug');

app.route("/").get((req, res) => {
  //Change the response to render the Pug template
  res.render('index');
  //res.send(`Pug template is not defined.`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port " + process.env.PORT);
});