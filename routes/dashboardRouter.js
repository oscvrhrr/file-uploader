const Router = require("express");
const multer = require("multer");


const checkAuth = require("../middleware/checkAuth")

const dashboardRouter = Router();
const { getUserAndData, createFolderInDrive, uploadFileInDrive, getFileData, getFolderData, logOutOfSession } = require("../controllers/dashboardController")

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

const upload = multer({ storage });

dashboardRouter.get("/", checkAuth, getUserAndData);

dashboardRouter.get("/folder/:folderId", getFolderData)

dashboardRouter.post("/create-folder", createFolderInDrive);

dashboardRouter.get("/file/:fileId", getFileData);

dashboardRouter.post("/file", upload.single("file"), uploadFileInDrive);

dashboardRouter.get("/log-out", logOutOfSession);



module.exports = dashboardRouter;