const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const buf_JSON = JSON.stringify(buf.toJSON());
const buf_convert = JSON.parse(buf_JSON).data;

const EventEmitter = require('events');
const convert = new EventEmitter();

const timeout = (cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb();
            resolve();
        }, )
    })
}
const call = async(i) => {
    await timeout(() => {
        buf_convert.forEach((item) => {
            console.log(item.toString());
        })
    })
    console.log("buffer converted");
}
call();