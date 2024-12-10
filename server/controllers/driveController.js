const db = require("../db/queries")
const decodeFile = require("../utils/decodeFile")
const uploadFileInBucket = require("../storage/uploadFile");



async function createFolderInDrive(req, res) {
  try {
    const { name } = req.body;
    const user = await req.user;
    const drive = await db.readQueries.getDrive(user.id);
    await db.createQueries.createFolder(name, drive.id);
    res.status(201).redirect("/dashboard")
  } catch (error) {
    console.error("Internal server error");
  }
}

async function uploadFileInDrive(req, res) {
  try {
    const { body, file } = req;
    const user = await req.user;
    const metaFile = file;
    const outputFile = decodeFile(metaFile);
    uploadFileInBucket(outputFile, metaFile, user.username);
    const drive = await db.readQueries.getDrive(user.id);
    await db.createQueries.createFile(body['file-name'], metaFile.size, `user-uploads/${user.username}/${metaFile.originalname}`, drive.id, null)
    res.status(200).redirect("/dashboard")
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  createFolderInDrive,
  uploadFileInDrive
}