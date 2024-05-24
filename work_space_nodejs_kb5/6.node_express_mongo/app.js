const express = require("express");
const dbConnect = require("./config/dbConnect");
const session = require('express-session'); 
const MongoStore = require("connect-mongo");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded());
const port = 3000;

// db를 load하는 코드
dbConnect();

app.get(['/', '/home', '/index'], function (req, res) {
  res.status(200);
  // res.render(__dirname + '/views/home');
  res.render('home');
});

app.use('/', require('./routes/memberRoutes'));

app.listen(port, () => {
  console.log(`${port}번으로 서버 실행중`);
});


