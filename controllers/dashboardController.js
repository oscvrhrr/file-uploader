const db = require("../db/queries")


async function  getUserAndData (req, res) {
  try {
    const user = await req.user;
    const drive = await db.readQueries.getDrive(user.id);
    const folders = await db.readQueries.getFolders(drive.id)
    res.status(200).render("dashboard", { user: user, drive: drive, folders: folders });
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
    res.status(201).render("dashboard", { user: req.user, drive: drive, folders: folders});
  } catch (error) {
    console.error("Internal server error");
  }
}

async function uploadFileInDrive(req, res) {
  try {
    const { body, file } = req;
    res.status(200).render("dashboard", { user: req.user }, console.log(body, file));
  } catch (err) {
    console.error(err)
  }
}

async function logOutOfSession(req, res, next) {
  req.logOut((err) => err ? next(err) : res.redirect("/"));
}




module.exports = {
    getUserAndData,
    createFolderInDrive,
    uploadFileInDrive,
    logOutOfSession
}