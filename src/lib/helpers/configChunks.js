const arrayIntoChunks = require("./arrayIntoChunks")

module.exports = (data) => {
    if(data.length <= 12) {
        let final = arrayIntoChunks(data, Math.ceil(data.length/2));
        return final
    } else {
        let final = arrayIntoChunks(data, 9);
        return final
    }
}