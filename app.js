const path = require("node:path");
const express = require("express");
const session = require("express-session")



const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.render("landing");
})




app.listen(4001, () => {
    console.log("server running on port 4001")
})