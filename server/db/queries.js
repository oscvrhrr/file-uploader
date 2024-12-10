const { PrismaClient } = require("@prisma/client");


const prisma =  new PrismaClient();

const createQueries = {
    async createUser(username, password) {
        await prisma.user.create({
            data: {
                username,
                password,
                drives: {
                     create: {
                        
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

    async createFile(name, size, path, driveId, folderId) {
        const data = {
            name,
            size,
            path,
            drive: {
                connect: { id: driveId }
            }
        };
    
        if (folderId) {
            data.folder = {
                connect: { id: folderId }
            };
        }
    
        await prisma.file.create({
            data
        });
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
          ownerId: userId,
        },
        include: {
          folders: {
            include: {
                files: true,
            },
          },
          files: {
            where: {
                folderId: null,
            },
          },
        },
    
    
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

    async getFolderbyId(folderId) {
        const folder = await prisma.folder.findFirst({
            where: {
                id: folderId
            },
            include: {
                files: true
            }
        })
        
        return folder
    },

    async getFiles(driveId) {
        const files = await prisma.file.findMany({
            where: {
                driveId: driveId
            }
        })
        return files
    },

    async getFileById(fileId) {
        const file = await prisma.file.findFirst({
            where: {
                id: fileId
            }
        })
        console.log(file)
        return file
    }
}

deleteQueries = {
  async deleteFileById(fileId) {
    await prisma.file.delete({
        where: {
            id: fileId
        }
    })
  },

  async deleteFolderById(folderId) {
    await prisma.folder.delete({
        where: {
            id: folderId
        }
    })
  }
}

module.exports = {
    createQueries,
    readQueries,
    deleteQueries,
    prisma
}