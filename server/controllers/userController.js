const db = require("../db/queries")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function createUserInDb(req, res) {
  try {
    console.log(req.body)
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await db.createQueries.createUser(username, hashedPassword);
    if(createdUser) {
      const token = jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET, { expiresIn: "2hr"})
      res.send(201).json(token)
    }
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Error creating user");
  }
}

async function getUserDrive (req, res) {
  try {
    const user = await req.user;
    const drive = await db.readQueries.getDrive(user.id);
    res.status(200).json({ user: user, drive: drive, folders: drive.folders, files: drive.files  });
  } catch (err) {
    console.error(err);
  }
}



module.exports = {
  createUserInDb,
  getUserDrive
};





