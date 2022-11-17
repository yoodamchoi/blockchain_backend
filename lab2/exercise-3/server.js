const wallet = require("/Users/choiyudam/Desktop/lab4-node-npm/lab2/exercise-1,2/modules/wallet.js")

const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plan');
    const _url = req.url;
    const queryData = url.parse(_url, true).query;
    if(_url == '/deposit') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plan');
        res.write('Deposit request received');
        res.end();
        return wallet.depositAmount(100);
    }
    if(_url == './address') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plan');
        res.write('Address request received')
        res.end();
        return wallet.getAddress();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});