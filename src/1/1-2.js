'use strict'
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, contents) => {
  console.log(abracadabra(contents));
});

function abracadabra(input) {
  let position = 0;
  let floor = 0;
  let asArray = Array.from(input);
  for (; position <= asArray.length; position++) {
    switch (asArray[position]) {
      case '(':
        floor++;
        break;
      case ')':
        floor--
        break;
    }
    if (floor < 0)
      break;
  }
  // 1 based array index
  return position + 1;
}