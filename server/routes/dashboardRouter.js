const Router = require("express");
const multer = require("multer");


const checkAuth = require("../middleware/checkAuth")

const dashboardRouter = Router();
const { getUserAndDrive, createFolderInDrive, uploadFileInDrive, getFileData, deleteFileById, deleteFolderById, logOutOfSession } = require("../controllers/dashboardController")
const { getFolderAndFilesById, uploadFileInFolder } = require("../controllers/folderController")

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

const upload = multer({ storage });

dashboardRouter.get("/", checkAuth, getUserAndDrive);

dashboardRouter.post("/file/:fileId", deleteFileById )

dashboardRouter.get("/folder/:folderId", getFolderAndFilesById)

dashboardRouter.post("/folder/:folderId/file", upload.single("file"), uploadFileInFolder);

dashboardRouter.post("/create-folder", createFolderInDrive);

dashboardRouter.post("/folder/:folderId", deleteFolderById )

dashboardRouter.get("/file/:fileId", getFileData);

dashboardRouter.post("/file", upload.single("file"), uploadFileInDrive);

dashboardRouter.get("/log-out", logOutOfSession);



module.exports = dashboardRouter;