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
    sum += calculateRibbon(dimensions[0], dimensions[1], dimensions[2]);
  }
  return sum;
}

function calculateRibbon(l,w,h){
  let perimeterA = 2*l + 2*w;
  let perimeterB = 2*w + 2*h;
  let perimeterC = 2*h + 2*l;
  let smallestPerimeter = Math.min(perimeterA, perimeterB, perimeterC);
  let bowLength = l*w*h;
  return bowLength + smallestPerimeter;
}
