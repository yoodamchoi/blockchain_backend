var moment = require('moment');

const getCurrentDate = () => {
    var wrapped = moment().format('MMMM Do YYYY, h:mm:ss a');;
    console.log(wrapped);
}

getCurrentDate();