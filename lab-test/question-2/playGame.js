const EventEmitter = require('events');
const { resolve } = require('path');
const pingpong = new EventEmitter();

pingpong.on('ping', () => {
    console.log("pong..");
});
pingpong.on('pong', () => {
    console.log("ping..")
});
const game = function() {
    pingpong.emit('pong');
    pingpong.emit('ping');
}

const finish = function() {
    console.log("game completed..")
}

const timeout = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb();
            resolve();
        }, 2000)
    })
}
const fun1 = async(x) => {
    for (let i=1; i<=x; i++) {
        await timeout(() => {
            console.log("Round "+i)
            game();
        })
    }
    finish();
}

fun1(3);