'use strict'
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, contents) => {
  // console.log(containsNVowels('ugknbfddgicrmopn', 3));
  console.log(abracadabra(contents) + " nice strings.");
});

function abracadabra(input) {
  const asArray = input.split('\n');
  return asArray.filter(isNice).length;
}

function isNice(str) {
  const vowelRequirement = 3;
  const badStrings = ['ab', 'cd', 'pq', 'xy'];

  return containsNVowels(str, vowelRequirement) &&
         containsOneDuplicateLetter(str) &&
         doesNotContain(str, badStrings);
}

/**
 * Returns true if it at least contains the required number of vowels.
 */
function containsNVowels(str, numVowels) {
  let matches = str.match(/[aeiou]/g)
  return matches && matches.length >= numVowels;
}

function containsOneDuplicateLetter(str) {
  let asArray = Array.from(str);
  for(let i = 0; i < asArray.length-1; i++) {
    let current = asArray[i];
    let next = asArray[i+1];
    if(current === next) return true;
  }
  return false;
}

/**
 * Returns true if 'str' does not contain any of the strings in strings
 */
function doesNotContain(str, strings) {
  let matches = str.match(/ab|cd|pq|xy/);
  return (matches === null || matches.length === 0);
}