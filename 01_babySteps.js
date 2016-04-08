var myNum = 0;

for (i = 2; i < process.argv.length; i++) {
  myNum += Number(process.argv[i]);
}

console.log(myNum);
