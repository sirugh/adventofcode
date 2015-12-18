'use strict'
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, contents) => {
  console.log(abracadabra(contents));
});

function abracadabra(input) {
  let floor = 0;
  const iterator = input[Symbol.iterator]();
  let iter = iterator.next();

  while (!iter.done) {
    // Assume that an open paren is up and anything else is down.
    iter.value === '(' ? floor++ : floor--;
    // Get a reference to the next iterator.
    iter = iterator.next();
  }
  return floor;
}