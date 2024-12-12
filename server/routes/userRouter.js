const Router = require("express")
const passport = require("../auth/passportConfig")
const jwt = require("jsonwebtoken")
const userController = require("../controllers/userController")

const userRouter = Router();

userRouter.post("/signup", userController.createUserInDb);

userRouter.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "2hr" })
  res.status(200).json({ token })
});

userRouter.get("/me", passport.authenticate("jwt", { session: false }), userController.getUserDrive);

// userRouter.delete("/:id",)

module.exports = userRouter