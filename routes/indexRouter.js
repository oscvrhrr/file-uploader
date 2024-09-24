const Router = require("express")
const passport = require("../auth/passportConfig")

const indexRouter = Router();
const userController = require("../controllers/userController")

indexRouter.get("/", (req, res) => {
    res.render("landing")
});

indexRouter.get("/log-in", (req, res) => {
    res.render("log-in")
});

indexRouter.post("/log-in", 
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/"
    })
);

indexRouter.get("/sign-up", (req, res) => {
    res.render("sign-up")
});

indexRouter.post("/sign-up", userController.createUserInDb)

indexRouter.get("/dashboard", (req, res) => {
    res.render("dashboard");
});





module.exports = indexRouter;