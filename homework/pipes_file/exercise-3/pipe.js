const request = require('request');
const fs = require('fs');
const file = fs.createWriteStream('./output.html')

request('http://www.google.com', function (error, res, body) {
    console.log('body: ', body);
})

const writeData = function(body) {
    file.write(body);
    file.end();
}

writeData;