const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const multer = require("multer");
const cors = require("cors");

const app = express();
const port = 3000;

username = "1234";
password = "1234";
const upload = multer({ dest: "/fileUploads" });
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded());

app.use(
  session({
    secret: "thisismysecret",
    cookie: { maxAge: 60000 }, // value of maxAge is defined in milliseconds.
    resave: false,
    rolling: false,
    saveUninitialized: true,
    islogged: false,
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
    console.log(req.body);
    res.send();
  }
  console.log(req.body);
  res.status(200);
  res.end();
});

app.post("/virement", cors(), upload.single("upload_file"), (req, res) => {
  // if (req.session.islogged == true) {
  console.log(req);
  console.log("we recieved your playload 'virement de mass'");
  console.log("this is your file: ", req.file);
  console.log(req.body);
  console.log(req);
  // }

  res.status(200);
  res.end();
});

app.post("/otp", cors(), (req, res) => {
  console.log(req.body);
  res.status(200);
  res.end();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
