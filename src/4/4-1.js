'use strict'
const fs = require('fs');
const path = require('path');
let md5 = require('md5');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, contents) => {
  console.log(abracadabra(contents));
});

function abracadabra(input) {
  let prefix = '00000';
  let salt = 0;
  while(!md5(input + ++salt).startsWith(prefix));
  return salt;
}