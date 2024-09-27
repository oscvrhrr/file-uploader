const db = require("../db/queries")


async function readDrive(req, res) {
    try {
        const user = await req.user;
        const { id } = user
        const drive = await db.readQueries.getDrive(id)
        res.render("dashboard", { user: user, drive: drive})
    } catch (err) {
        console.error(err);
    }
}

async function createFolder(req, res) {
    const { name } = req.body;
    const drive = await db.readQueries.getDrive(req.user.id)
    await db.createQueries.createFolder(name, drive.id)
    res.render("dashboard", { user: req.user});
}




module.exports = {
    createFolder,
    readDrive
}