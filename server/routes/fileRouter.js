const Router = require("express");

const { deleteFileById, updateFileById } = require("../controllers/fileController");

const fileRouter = Router();



fileRouter.patch("/:fileId", updateFileById )

fileRouter.delete("/:fileId", deleteFileById)





module.exports = fileRouter;