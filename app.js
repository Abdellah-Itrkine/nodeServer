const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 3000;
const session = require("express-session");

username = "1234";
password = "1234";

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.use(
  session({
    secret: "thisismysecret",
    cookie: { maxAge: 60000 }, // value of maxAge is defined in milliseconds. 
    resave: false,
    rolling: false,
    saveUninitialized: true
  })
  );

app.get("/", cors(), (req, res) => {
  res.send("This is a simulation ");
});

app.post("/login", cors(), (req, res) => {
  if (req.body.username == username) {
    res.cookie("islogged", true, {
      expires: new Date(new Date().getTime() + 1000 * 6),
      secure: true,
    });
    res.cookie() = req.cookies();
    console.log(res);
    res.send();
  }
  res.status(200);
  res.end();
});

app.post("/virement", cors(), (req, res) => {
  console.log(req.session);
  console.log(JSON.stringify(req.body));
  res.status(200);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
