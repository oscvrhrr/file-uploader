const Router = require("express");
const driveController = require("../controllers/driveController")


const driveRouter = Router()

//new folder in a drive
driveRouter.post("/drives/:driveid/folder", driveController.createFolderInDrive)


//new file in a drive
driveRouter.post("/drives/:driveid/file", driveController.uploadFileInDrive)


//get a drive
driveRouter.get("/drives/:driveid")

module.exports = driveRouter;