const db = require("../db/queries");





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




module.exports = {
    getFileData,
    deleteFileById,
    deleteFolderById,
}