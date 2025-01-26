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

async function updateFileById(req, res) {
  try {
    const { fileId } = req.params;
    const { name } = req.body;
    await db.updateQueries.updateFileName(Number(fileId), name);
    res.status(200).json("update successful")
  } catch (err){
    console.log("error updating filename", err)
  }
  
}



module.exports = {
  deleteFileById,
  updateFileById
}