const db = require("../db/queries")
const decodeFile = require("../utils/decodeFile")
const uploadFileInBucket = require("../storage/uploadFile");




async function getUserAndDrive (req, res) {
  try {
    const user = await req.user;
    const drive = await db.readQueries.getDrive(user.id);
    res.status(200).render("dashboard", { user: user, drive: drive, folders: drive.folders, files: drive.files  });
  } catch (err) {
    console.error(err);
  }
}


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

async function getFileData(req, res) {
  try {
    const fileId = Number(req.params.fileId)
    const file = await db.readQueries.getFileById(fileId)
    res.status(200).render("file", { file:[file] })
  } catch (err) {
    console.err("error getting file data", err)
  }
}

async function deleteFileById(req, res) {
  try {
    const fileId = Number(req.params.fileId)
    await db.deleteQueries.deleteFileById(fileId);
    res.redirect("/dashboard");
  } catch (err) {
      console.log("error deleting file by id", err)
  }
}

async function deleteFolderById(req, res) {
  try {
    const folderId = Number(req.params.folderId)
    await db.deleteQueries.deleteFolderById(folderId);
    res.redirect("/dashboard")
  } catch (err) {
    console.log("Error deleting folder", err);
  }
}


async function logOutOfSession(req, res, next) {
  req.logOut((err) => err ? next(err) : res.redirect("/"));
}




module.exports = {
    getUserAndDrive,
    createFolderInDrive,
    uploadFileInDrive,
    getFileData,
    deleteFileById,
    deleteFolderById,
    logOutOfSession
}