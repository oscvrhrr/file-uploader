const db = require("../db/queries")
const decodeFile = require("../utils/decodeFile")
const uploadFileInBucket = require("../storage/uploadFile")




async function getUserAndData (req, res) {
  try {
    const user = await req.user;
    const drive = await db.readQueries.getDrive(user.id);
    const folders = await db.readQueries.getFolders(drive.id);
    const files = await db.readQueries.getFiles(drive.id);
    res.status(200).render("dashboard", { user: user, drive: drive, folders: folders, files: files });
  } catch (err) {
    console.error(err);
  }
}


async function createFolderInDrive(req, res) {
  try {
    const { name } = req.body;
    const drive = await db.readQueries.getDrive(req.user.id);
    await db.createQueries.createFolder(name, drive.id);
    const folders = await db.readQueries.getFolders(drive.id);
    const files = await db.readQueries.getFiles(drive.id);
    res.status(201).render("dashboard", { user: req.user, folders: folders, files: files});
  } catch (error) {
    console.error("Internal server error");
  }
}

async function uploadFileInDrive(req, res) {
  try {
    const { body, file } = req;
    const metaFile = file;
    const outputFile = decodeFile(metaFile);
    uploadFileInBucket(outputFile, metaFile);
    const drive = await db.readQueries.getDrive(req.user.id);
    await db.createQueries.createFile(body['file-name'], metaFile.size, `uploads/${metaFile.originalname}`, drive.id)
    const folders = await db.readQueries.getFolders(drive.id);
    const files = await db.readQueries.getFiles(drive.id);
    res.status(200).render("dashboard", { user: req.user, folders: folders, files: files });
  } catch (err) {
    console.error(err)
  }
}

async function getFileData(req, res) {
  try {
    const fileId = Number(req.params.fileId)
    const file = await db.readQueries.getFileById(fileId)
    res.status(200).render("file", { file:[file] })
  } catch (err) {
    console.err("error getting file data", err)
  }
}

async function getFolderData(req, res) {
  try {
    const folderId = Number(req.params.folderId);
    const folder = await db.readQueries.getFolderbyId(folderId);
    res.status(200).render("folder", { folder: [folder]})
  } catch (err) {
    console.err("error opening folder", err)
  }
}

async function logOutOfSession(req, res, next) {
  req.logOut((err) => err ? next(err) : res.redirect("/"));
}




module.exports = {
    getFolderData,
    getUserAndData,
    createFolderInDrive,
    uploadFileInDrive,
    getFileData,
    logOutOfSession
}