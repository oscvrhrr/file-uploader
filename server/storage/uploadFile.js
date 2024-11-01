const supabase = require("./supabaseClient")

const uploadFileInBucket = async(outputFile, metaFile, username) => {
    await supabase.storage.from('Files_fileupload').upload(`user-uploads/${username}/${metaFile.originalname}`, outputFile, {
        contentType: metaFile.mimetype
      });
}

module.exports = uploadFileInBucket;