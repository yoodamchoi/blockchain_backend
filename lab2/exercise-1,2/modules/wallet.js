const SHA256 = require('crypto-js/sha256')
const EventEmitter = require('events')

const getAddress = function() {
    const address = SHA256(Math.random(1000))
    console.log(`Wallet Address is ${address}`)
}

const eventEmitter = new EventEmitter();

const transactionReceived = function () {
    eventEmitter.on('deposited', transactionReceived)
    console.log('Transaction Received...')
}

const depositAmount = function(deposit) {
    console.log(`Amount: ${deposit} deposited.`)
}

module.exports = {
    getAddress,
    transactionReceived,
    depositAmount
}