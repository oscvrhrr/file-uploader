require("dotenv").config();
const express = require("express");
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const driveRouter = require("./routes/driveRouter")
const folderRouter = require("./routes/folderRouter")
const fileRouter = require("./routes/fileRouter")
const passport = require("./auth/passportConfig")




const app = express();







app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));



app.use("/users", userRouter)

app.use("/drives", passport.authenticate("jwt", { session: false }) , driveRouter)

app.use("/folders", passport.authenticate("jwt", { session: false }), folderRouter)

app.use("/file", passport.authenticate("jwt", { session: false }), fileRouter)


app.listen(process.env.PORT, () => {
  console.log("server running on port")
})



// app.use("/dashboard", dashboardRouter)