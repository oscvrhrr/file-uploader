const Router = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const checkAuth = require("../middleware/checkAuth")

const dashboardRouter = Router();
const { getUserAndData, createFolderInDrive, uploadFileInDrive, getFileData, getFolderData, logOutOfSession } = require("../controllers/dashboardController")


dashboardRouter.get("/", checkAuth, getUserAndData);

dashboardRouter.get("/folder/:folderId", getFolderData)

dashboardRouter.post("/create-folder", createFolderInDrive);

dashboardRouter.get("/file/:fileId", getFileData);

dashboardRouter.post("/file", upload.single("file"), uploadFileInDrive);

dashboardRouter.get("/log-out", logOutOfSession);



module.exports = dashboardRouter;