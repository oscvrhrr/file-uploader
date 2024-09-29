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
    },

    async createFile(name, path, driveId) {
        await prisma.file.create({
            data: {
                name,
                path,
                drive: {
                    connect: { id: driveId}
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
    },

    async getFolders(driveId) {
        const folders = await prisma.folder.findMany({
            where: {
                driveId: driveId
            }
        })
        return folders
    },

    async getFiles(driveId) {
        const files = await prisma.file.findMany({
            where: {
                driveId: driveId
            }
        })
        return files
    }
}

module.exports = {
    createQueries,
    readQueries,
    prisma
}