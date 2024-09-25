const db = require("../db/queries")
const bcrypt = require("bcryptjs")

async function createUserInDb(req, res) {
   const { username, password } = req.body;
   const hashedPassword = await bcrypt.hash(password, 10);
   try {
        await db.userQueries.createUser(username, hashedPassword)
        res.status(201).redirect("/dashboard")
   } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).send("Error creating user");
   }
}



module.exports = {
    createUserInDb
}


