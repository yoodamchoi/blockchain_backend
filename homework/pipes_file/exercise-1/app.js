const fs = require('fs')
const stream = fs.createReadStream("data.txt")

stream.on("data", function(data) {
    console.log(data.toString('utf8'));
});
