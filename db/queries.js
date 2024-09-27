const { PrismaClient } = require("@prisma/client");
const { name } = require("ejs");

const prisma =  new PrismaClient();

const createQueries = {
    async createUser(username, password) {
        await prisma.user.create({
            data: {
                username,
                password,
                drives: {
                     create: {
                        name
                     }
                }
            }
        })
    },

    async createFolder(name, driveId) {
        await prisma.folder.create({
            data: {
                name,
                drive: {
                    connect: { id: driveId }
                }
            }
        })
    }
};


const readQueries = {

    async getUser(userId) {
        await prisma.user.findUnique({
            where: {

            }
        })
    },

    async getDrive(userId) {
       const drive =  await prisma.drive.findFirst({
        where: {
           ownerId: userId
        }
       })

       return drive
    }
}

module.exports = {
    createQueries,
    readQueries,
    prisma
}