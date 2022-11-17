const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9]);

const buffer_string = Buffer.from("I'm a string!", "utf-8");

const buffer_join = Buffer.concat([buffer_array,buffer_string]);

console.log(buffer_array)
console.log(buffer_string)
console.log(buffer_string.toString('utf8'))
console.log(buffer_string.toString('hex'))
console.log(buffer_string.toString('utf8',0,10))
console.log(buffer_join)
console.log(buffer_join.toJSON())

{/* <Buffer 08 06 07 05 03 00 09>
<Buffer 49 27 6d 20 61 20 73 74 72 69 6e 67 21>
I'm a string!
49276d206120737472696e6721
I'm a stri
<Buffer 08 06 07 05 03 00 09 49 27 6d 20 61 20 73 74 72 69 6e 67 21>
{
  type: 'Buffer',
  data: [
      8,   6,   7,   5,   3,  0,   9,
     73,  39, 109,  32,  97, 32, 115,
    116, 114, 105, 110, 103, 33
  ]
} */}