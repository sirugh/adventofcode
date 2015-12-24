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

  return containsNonOverlappingLetterPairs(str) &&
         containsOneSkippedLetter(str);
}

/**
 * It contains a pair of any two letters that appears at least twice in the
 * string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like
 * aaa (aa, but it overlaps).
 */
function containsNonOverlappingLetterPairs(str) {
  let matches = str.match(/([a-z][a-z])[a-z]*\1/);
  return !!matches;
}

/**
 * It contains at least one letter which repeats with exactly one letter
 * between them, like xyx, abcdefeghi (efe), or even aaa.
 */
function containsOneSkippedLetter(str) {
  let matches = str.match(/([a-z])[a-z]\1/);
  return !!matches;
}
