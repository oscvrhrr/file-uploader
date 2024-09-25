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

indexRouter.get("/log-out", (req, res, next) => {
    req.logOut((err) => {
        if(err) {
            return next(err)
        }
        res.redirect("/");
    });
});

indexRouter.post("/log-in", 
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/log-in"
    })
);

indexRouter.get("/dashboard", (req, res) => {
    res.render("dashboard", { user: req.user});
});



indexRouter.get("/sign-up", (req, res) => {
    res.render("sign-up")
});

indexRouter.post("/sign-up", userController.createUserInDb)







module.exports = indexRouter;