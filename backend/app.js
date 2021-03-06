const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postRoutes = require("./routes/post");


const app = express();

mongoose.connect("mongodb+srv://vladimirkopecky:siLlmpkEtgQ8PA0X@cluster0-vgusw.mongodb.net/node-angular?retryWrites=true")
.then(() => {
  console.log('Connected to database ! ');
})
.catch(() => {
  console.log('Connection failed ! ');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use("/api/posts", postRoutes);


module.exports = app;
