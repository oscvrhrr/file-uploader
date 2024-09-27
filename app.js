const path = require("node:path");
const express = require("express");
const passport  = require("./auth/passportConfig")
const session = require("express-session")
const { PrismaSessionStore } = require("@quixo3/prisma-session-store")
const { prisma } = require("./db/queries")
const dashboardRouter = require("./routes/dashboardRouter")
const indexRouter  = require("./routes/indexRouter")


const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        cookie: {
            maxAge: 7 * 24 * 60 * 60 * 1000 // ms
           },
        secret: 'banana',
        resave: false,
        saveUninitialized: false,
        store: new PrismaSessionStore(
            prisma,
            {
                checkPeriod: 2 * 60 * 1000,  //ms
                dbRecordIdIsSessionId: true,
                dbRecordIdFunction: undefined,
            }
        )
    })
)
app.use(passport.session());


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.use("/dashboard", dashboardRouter)
app.use("/", indexRouter)




app.listen(4001, () => {
    console.log("server running on port 4001")
})