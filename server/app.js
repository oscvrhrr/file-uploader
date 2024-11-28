require("dotenv").config();
const express = require("express");
const passport  = require("./auth/passportConfig");
const { prisma } = require("./db/queries");
const dashboardRouter = require("./routes/dashboardRouter");
const indexRouter  = require("./routes/indexRouter");
const jwt = require("jsonwebtoken")
const cors = require("cors")

const app = express();





app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors())




app.post("/login", passport.authenticate("jwt", { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "2hr" })
  res.json(token)
});

app.use("/", indexRouter)
app.use("/dashboard", dashboardRouter)



app.listen(process.env.PORT, () => {
  console.log("server running on port")
})