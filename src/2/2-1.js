'use strict'
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, contents) => {
  console.log(abracadabra(contents));
});

function abracadabra(input) {
  let sum = 0;
  const asArray = input.split('\n');
  for (let i = 0; i < asArray.length; i++) {
    let dimensions = asArray[i].split('x');
    sum += calculateWrappingPaper(dimensions[0], dimensions[1], dimensions[2]);
  }
  return sum;
}

function calculateWrappingPaper(l,w,h) {
  let sideA = l*w;
  let sideB = w*h;
  let sideC = h*l;
  let extra = Math.min(sideA, sideB, sideC);
  return 2*sideA + 2*sideB + 2*sideC + extra;
}
