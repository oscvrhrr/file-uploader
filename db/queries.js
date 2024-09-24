const { PrismaClient } = require("@prisma/client")

const prisma =  new PrismaClient();

userQueries = {
    async createUser(username, password) {
        await prisma.user.create({
            data: {
                username,
                password
            }
        })
    },

    // async findUser(username, password) {
    //     await prisma.
    // }
}


module.exports = {
    userQueries,
    prisma
}