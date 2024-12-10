require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRouter")
const folderRouter = require("./routes/folderRouter")
const driveRouter = require("./routes/driveRouter")
const cors = require("cors")


const app = express();





app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.use("/users", userRouter)

app.use("/drives", driveRouter)

app.use("/folders", folderRouter)


app.listen(process.env.PORT, () => {
  console.log("server running on port")
})



// app.use("/dashboard", dashboardRouter)