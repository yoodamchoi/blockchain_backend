const multiplyTwoNumbers = function(x,y) {
    const multiple = x * y;
    console.log("multiply "+x+" * "+y+" equals: "+multiple);
    if (x % 1 === 1 || y % 1 === 1) {
        throw new Error('error!');
    }
}
// console.log(multiplyTwoNumbers(6,6));

const evenDoubler = function(x) {
    if (x % 2 === 0) {
        const multiple_2 = x * x;
        console.log("even doubler "+x+" equals: "+multiple_2);
    }
    if (x % 2 === 1) {
        throw new Error('error!');
    }
}
// console.log(evenDoubler(5));

module.exports = multiplyTwoNumbers;
module.exports = evenDoubler;
