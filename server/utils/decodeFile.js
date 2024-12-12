const { decode } = require("base64-arraybuffer");

 const decodeFile = (file) => {
    const base64 = decode(file.buffer.toString('base64'));
    return base64
};



module.exports = decodeFile





