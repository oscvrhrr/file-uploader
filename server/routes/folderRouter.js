const Router = require("express");
const multer = require("multer");




const folderRouter = Router();
const { createFolderInDrive, uploadFileInDrive, getFileData, deleteFileById, deleteFolderById } = require("../controllers/dashboardController")
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



folderRouter.post("/file/:fileId", deleteFileById )

folderRouter.get("/folder/:folderId", getFolderAndFilesById)

folderRouter.post("/folder/:folderId/file", upload.single("file"), uploadFileInFolder);

// folderRouter.post("/create-folder", createFolderInDrive);

folderRouter.post("/folder/:folderId", deleteFolderById )

folderRouter.get("/file/:fileId", getFileData);

// folderRouter.post("/file", upload.single("file"), uploadFileInDrive);




module.exports = folderRouter;