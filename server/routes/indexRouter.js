const passport = require("../auth/passportConfig")
const Router = require("express")


const indexRouter = Router();
const userController = require("../controllers/userController")


indexRouter.get("/", (req, res) => {
  res.render("landing");
});

indexRouter.get("/log-in", (req, res) => {
  res.render("log-in");
});

indexRouter.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

indexRouter.post("/sign-up", userController.createUserInDb);

indexRouter.post("/log-in", 
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/log-in"
  })
);


module.exports = indexRouter;