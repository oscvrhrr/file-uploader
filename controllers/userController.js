const db = require("../db/queries")

async function createUserInDb(req, res) {
   const { username, password } = req.body;
   try {
        await db.userQueries.createUser(username, password)
        res.status(201).redirect("/dashboard")
   } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).send("Error creating user");
   }
}



module.exports = {
    createUserInDb
}


