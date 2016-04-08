var fs = require('fs');

var fileObj = fs.readFileSync(process.argv[2]);

var fileStr = fileObj.toString('utf8');

var fileArray = fileStr.split('\n');

console.log(fileArray.length - 1);
