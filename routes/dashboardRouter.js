const Router = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const checkAuth = require("../middleware/checkAuth")

const dashboardRouter = Router();
const { getUserAndData, createFolderInDrive, uploadFileInDrive, logOutOfSession } = require("../controllers/dashboardController")


dashboardRouter.get("/", checkAuth, getUserAndData);

dashboardRouter.post("/create-folder", createFolderInDrive);

dashboardRouter.post("/file", upload.single("file"), uploadFileInDrive);

dashboardRouter.get("/log-out", logOutOfSession);



module.exports = dashboardRouter;