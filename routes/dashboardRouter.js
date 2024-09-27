const Router = require("express");
const multer = require("multer")
const upload = multer({dest: 'uploads/'})

const dashboardRouter = Router()
const driveController = require("../controllers/driveController")

dashboardRouter.get("/", driveController.readDrive);

dashboardRouter.post("/file", upload.single("file"), (req, res) => {
    const { body, file } = req
    res.render("dashboard", { user: req.user}, console.log(body,file))
})

dashboardRouter.post("/create-folder", driveController.createFolder);



module.exports = dashboardRouter