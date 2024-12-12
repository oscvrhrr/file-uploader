const Router = require("express");
const driveController = require("../controllers/driveController")
const multer = require("multer")

const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage });


const driveRouter = Router()

//new folder in a drive
driveRouter.post("/:driveid/folder", driveController.createFolderInDrive)


//new file in a drive
driveRouter.post("/:driveid/file", upload.single("file"), driveController.uploadFileInDrive)


//get a drive
driveRouter.get("/:driveid")

module.exports = driveRouter;