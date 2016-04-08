/*
var fs = require('fs');

var fileObj = fs.readFileSync(process.argv[2]);

var fileStr = fileObj.toString('utf8');

var fileArray = fileStr.split('\n');

console.log(fileArray.length - 1);
*/

var fs = require('fs');
var fileStr = "";
var fileArray;

console.log(process.argv[2]);

function countLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {

    fileStr = fileContents.toString('utf8');
console.log(fileStr);
    fileArray = fileStr.split('\n');
    
    callback();

  });

};

console.log(fileArray.length - 1);
