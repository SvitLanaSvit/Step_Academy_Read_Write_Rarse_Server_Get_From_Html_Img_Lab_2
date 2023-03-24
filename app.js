const { json } = require('body-parser');
const fs = require('fs');
var Parser = require('./parser');
const path = 'sample.txt';
const parser = new Parser(path);
parser.on("greet", ()=>{
    console.log(`Count of words in the file ${path}: `);
});
var arrCount = parser.parse();
//console.log(arrCount);

const strWords = JSON.stringify(arrCount);
const writeStr = fs.createWriteStream('write.txt');
writeStr.write(strWords);


////Variant_2_without_EVENT
// var Parser = require('./parser');
// const path = 'sample.txt';
// const parser = new Parser(path);
// const wordCounts = parser.parse();
// console.log(wordCounts);