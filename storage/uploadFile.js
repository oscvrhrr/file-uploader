const supabase = require("./supabaseClient")

const uploadFileInBucket = async(outputFile, metaFile) => {
    await supabase.storage.from('Files_fileupload').upload(`uploads/${metaFile.originalname}`, outputFile, {
        contentType: metaFile.mimetype
      });
}

module.exports = uploadFileInBucket;