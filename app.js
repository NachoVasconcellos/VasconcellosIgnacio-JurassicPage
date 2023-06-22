const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Onboarding")
})

app.get("/home", (req, res) => {
    res.send("Home Page")
})

app.get("/details", (req, res) => {
    res.send("Product's details")
})

app.get("/cart", (req, res) => {
    res.send("Cart Page")
})

app.get("/account", (req, res) => {
    res.send("Login/Register")
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})