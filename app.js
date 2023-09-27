const express = require('express');
const router = require('./routes/usuariosRoutes');
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "12345",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 5000 },
  })
);

app.use("/", router)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})