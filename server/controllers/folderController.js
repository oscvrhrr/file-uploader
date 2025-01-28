const db = require("../db/queries")
const decodeFile = require("../utils/decodeFile");
const uploadFileInBucket = require("../storage/uploadFile")


async function getFileData(req, res) {
  try {
    const fileId = Number(req.params.fileId)
    const file = await db.readQueries.getFileById(fileId)
    console.log(file)
    res.status(200).json(file)
  } catch (err) {
    console.err("error getting file data", err)
  }
}


async function getFolderAndFilesById(req, res) {
  try {
    const folderId = Number(req.params.folderId);
    const folder = await db.readQueries.getFolderbyId(folderId);
    console.log(folder)
    res.status(200).json({ folder })
  } catch (err) {
    console.err("error opening folder", err)
  }
}

async function uploadFileInFolder(req, res) {
  try {
    const user = await req.user
    const folderId = Number(req.params.folderId)
    const outputFile = decodeFile(req.file);
    uploadFileInBucket(outputFile, req.file, user.username);
    const drive = await db.readQueries.getDrive(req.user.id);
    await db.createQueries.createFile(req.body['name'], req.file.size, `user-uploads/${user.username}/${req.file.originalname}`, drive.id, folderId)
    res.status(201).json("file created in folder")
  } catch (err) {
    console.error("Error uploading file in folder", err);
    res.status(500).send("Error uploading file in folder");
  }
}

async function updateFolder(req, res) {
  try {
    const { folderid } = await req.params;
    const { name } = await req.body
    const id = Number(folderid)
    await db.updateQueries.updateFolderName(id, name)
    res.status(200).json("update successful")
  } catch (error) {
    console.log("error updating folder name", error)
  }
}

async function deleteFolder(req, res) {
  try {
    const { folderid } = await req.params;
    const id = Number(folderid);
    await db.deleteQueries.deleteFolderById(id)
    res.status(200).json("folder deleted")
  } catch (error) {
    console.log("error deleting folder", error)
  }
}




module.exports = {
    getFileData,
    getFolderAndFilesById,
    uploadFileInFolder,
    updateFolder,
    deleteFolder,
}