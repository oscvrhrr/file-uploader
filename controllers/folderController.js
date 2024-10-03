const db = require("../db/queries")
const decodeFile = require("../utils/decodeFile");
const uploadFileInBucket = require("../storage/uploadFile")


async function getFolderAndFilesById(req, res) {
  try {
    const folderId = Number(req.params.folderId);
    const folder = await db.readQueries.getFolderbyId(folderId);
    console.log(folder)
    res.status(200).render("folder", { folder: [folder], files: folder.files})
  } catch (err) {
    console.err("error opening folder", err)
  }
}

async function uploadFileInFolder(req, res) {
  try {
    const folderId = Number(req.params.folderId)
    const outputFile = decodeFile(req.file);
    uploadFileInBucket(outputFile, req.file);
    const drive = await db.readQueries.getDrive(req.user.id);
    await db.createQueries.createFile(req.body['file-name'], req.file.size, `uploads/${req.file.originalname}`, drive.id, folderId)
    res.redirect(`/dashboard/folder/${folderId}`)
  } catch (err) {
    console.error("Error uploading file in folder", err)
  }
}





module.exports = {
    getFolderAndFilesById,
    uploadFileInFolder,
}