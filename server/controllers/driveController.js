const db = require("../db/queries")
const decodeFile = require("../utils/decodeFile")
const uploadFileInBucket = require("../storage/uploadFile");



async function createFolderInDrive(req, res) {
  try {
    const user = await req.user;
    const drive = await db.readQueries.getDrive(user.id);
    await db.createQueries.createFolder("Untitled folder", drive.id);
    res.status(201).json("folder created")
  } catch (error) {
    console.error("Internal server error");
  }
}

async function uploadFileInDrive(req, res) {
  try {
    const { body, file, user } = req;
    const metaFile = file;
    const outputFile = decodeFile(metaFile);
    uploadFileInBucket(outputFile, metaFile, user.username);
    const drive = await db.readQueries.getDrive(user.id);
    await db.createQueries.createFile(body.name, metaFile.size, `user-uploads/${user.username}/${metaFile.originalname}`, drive.id, null)
    res.status(201).json("success file created")
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  createFolderInDrive,
  uploadFileInDrive
}