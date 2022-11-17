const ProgressBar = require('progress');
const chalk = require('chalk');

var downloadBar = new ProgressBar(':bar :percent :etas', { 
    complete: chalk.bgGreen(''),
    incomplete: chalk.bgBlack(''),
    width: 20,
    total: 100,
 });

 const startProgress = function() {
    console.log(chalk.green('Downloaded --> Started.'));
    let timer = setInterval(() => {
        console.log(downloadBar.tick());

        if (downloadBar.complete) {
            console.log(chalk.green("Downloaded --> Completed."))
            clearInterval(timer);
        }
    }, 500);
 }

 module.exports = ( startProgress );